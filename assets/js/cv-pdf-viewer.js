/**
 * Enhanced PDF Viewer for Academic CV
 * Provides fallback support and better user experience
 */

class CVPDFViewer {
  constructor() {
    this.pdfUrl = '/files/Tuan_CuongVuong_AI_Research_CV.pdf';
    this.currentZoom = 1.0;
    this.isFullscreen = false;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.detectPDFSupport();
    this.setupAccessibility();
  }

  setupEventListeners() {
    // Tab switching
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('tab-btn')) {
        this.handleTabSwitch(e);
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      this.handleKeyboardNav(e);
    });

    // Window resize
    window.addEventListener('resize', () => {
      this.handleResize();
    });
  }

  handleTabSwitch(event) {
    const tabName = event.target.getAttribute('data-tab') || 
                   (event.target.textContent.includes('Preview') ? 'preview' : 'details');
    
    // Remove active class from all tabs and buttons
    document.querySelectorAll('.tab-content').forEach(tab => 
      tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => 
      btn.classList.remove('active'));

    // Activate selected tab
    const targetTab = document.getElementById(`${tabName}-tab`);
    if (targetTab) {
      targetTab.classList.add('active');
      event.target.classList.add('active');
    }

    // Track analytics
    this.trackEvent('tab_switch', tabName);
  }

  detectPDFSupport() {
    const iframe = document.getElementById('pdf-viewer');
    if (!iframe) return;

    // Check if browser supports PDF viewing
    const supportsPDF = this.browserSupportsPDF();
    
    if (!supportsPDF) {
      this.showFallbackOption();
    } else {
      this.loadPDFWithFallback();
    }
  }

  browserSupportsPDF() {
    // Check for PDF support in different browsers
    const isChrome = /Chrome/.test(navigator.userAgent);
    const isFirefox = /Firefox/.test(navigator.userAgent);
    const isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    const isEdge = /Edge/.test(navigator.userAgent);

    // Most modern browsers support PDF embedding
    return isChrome || isFirefox || isEdge || isSafari;
  }

  loadPDFWithFallback() {
    const iframe = document.getElementById('pdf-viewer');
    const fallback = document.querySelector('.pdf-fallback');
    
    // Show loading indicator
    this.showLoading();

    // Set up iframe with enhanced parameters
    const pdfParams = [
      'toolbar=1',
      'navpanes=1',
      'scrollbar=1',
      'page=1',
      'view=FitH',
      'zoom=page-fit'
    ].join('&');

    iframe.src = `${this.pdfUrl}#${pdfParams}`;

    // Handle load events
    iframe.onload = () => {
      this.hideLoading();
      this.trackEvent('pdf_loaded', 'success');
    };

    iframe.onerror = () => {
      this.hideLoading();
      this.showFallbackOption();
      this.trackEvent('pdf_loaded', 'error');
    };

    // Timeout fallback
    setTimeout(() => {
      if (!iframe.contentDocument && iframe.style.display !== 'none') {
        this.showFallbackOption();
      }
    }, 5000);
  }

  showLoading() {
    const container = document.querySelector('.pdf-embed-wrapper');
    if (container) {
      container.innerHTML = `
        <div class="pdf-loading">
          <div class="loading-content">
            <div class="loading-spinner"></div>
            <p style="margin-top: 15px; color: #6c757d;">Loading CV...</p>
          </div>
        </div>
      `;
    }
  }

  hideLoading() {
    const loading = document.querySelector('.pdf-loading');
    if (loading) {
      loading.remove();
    }
  }

  showFallbackOption() {
    const iframe = document.getElementById('pdf-viewer');
    const fallback = document.querySelector('.pdf-fallback');
    
    if (iframe) iframe.style.display = 'none';
    if (fallback) {
      fallback.style.display = 'block';
      fallback.innerHTML = `
        <div style="text-align: center; padding: 40px;">
          <i class="fa fa-file-pdf-o" style="font-size: 4rem; color: #dc3545; margin-bottom: 20px;"></i>
          <h4>PDF Viewer Not Available</h4>
          <p style="margin: 15px 0; color: #6c757d;">
            Your browser doesn't support inline PDF viewing, but you can still access my CV:
          </p>
          <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
            <a href="${this.pdfUrl}" target="_blank" class="btn btn-primary">
              <i class="fa fa-external-link"></i> Open PDF in New Tab
            </a>
            <a href="${this.pdfUrl}" download class="btn btn-secondary">
              <i class="fa fa-download"></i> Download PDF
            </a>
            <button onclick="cvPDFViewer.showTab('details')" class="btn btn-secondary">
              <i class="fa fa-list"></i> View Details Below
            </button>
          </div>
        </div>
      `;
    }
  }

  handleResize() {
    const isMobile = window.innerWidth <= 768;
    const mobileNotice = document.querySelector('.mobile-pdf-notice');
    const pdfWrapper = document.querySelector('.pdf-embed-wrapper');
    
    if (isMobile) {
      if (mobileNotice) mobileNotice.style.display = 'block';
      if (pdfWrapper) pdfWrapper.style.display = 'none';
    } else {
      if (mobileNotice) mobileNotice.style.display = 'none';
      if (pdfWrapper) pdfWrapper.style.display = 'block';
    }
  }

  handleKeyboardNav(event) {
    // ESC to exit fullscreen
    if (event.key === 'Escape' && this.isFullscreen) {
      this.exitFullscreen();
    }
    
    // F for fullscreen
    if (event.key === 'f' || event.key === 'F') {
      if (document.activeElement && document.activeElement.closest('.pdf-viewer-container')) {
        event.preventDefault();
        this.toggleFullscreen();
      }
    }
  }

  toggleFullscreen() {
    const container = document.querySelector('.pdf-viewer-container');
    if (!container) return;

    if (this.isFullscreen) {
      this.exitFullscreen();
    } else {
      this.enterFullscreen();
    }
  }

  enterFullscreen() {
    const container = document.querySelector('.pdf-viewer-container');
    container.classList.add('pdf-fullscreen');
    document.body.style.overflow = 'hidden';
    this.isFullscreen = true;
    this.trackEvent('fullscreen', 'enter');
  }

  exitFullscreen() {
    const container = document.querySelector('.pdf-viewer-container');
    container.classList.remove('pdf-fullscreen');
    document.body.style.overflow = 'auto';
    this.isFullscreen = false;
    this.trackEvent('fullscreen', 'exit');
  }

  openInNewTab() {
    window.open(this.pdfUrl, '_blank', 'noopener,noreferrer');
    this.trackEvent('pdf_open', 'new_tab');
  }

  downloadPDF() {
    const link = document.createElement('a');
    link.href = this.pdfUrl;
    link.download = 'Tuan_CuongVuong_AI_Research_CV.pdf';
    link.click();
    this.trackEvent('pdf_download', 'direct');
  }

  setupAccessibility() {
    // Add ARIA labels and keyboard navigation hints
    const container = document.querySelector('.pdf-viewer-container');
    if (container) {
      container.setAttribute('role', 'document');
      container.setAttribute('aria-label', 'Tuan-Cuong Vuong CV PDF Viewer');
      container.setAttribute('tabindex', '0');
    }

    // Add keyboard hints
    const controls = document.querySelector('.pdf-controls');
    if (controls) {
      const hint = document.createElement('small');
      hint.style.color = '#6c757d';
      hint.style.marginLeft = '15px';
      hint.textContent = 'Press F for fullscreen, ESC to exit';
      controls.appendChild(hint);
    }
  }

  trackEvent(action, label) {
    // Google Analytics 4 tracking
    if (typeof gtag !== 'undefined') {
      gtag('event', action, {
        event_category: 'CV_PDF_Viewer',
        event_label: label,
        custom_map: {
          pdf_url: this.pdfUrl
        }
      });
    }

    // Console log for development
    console.log(`CV PDF Viewer: ${action} - ${label}`);
  }
}

// Global functions for backward compatibility
window.showTab = function(tabName) {
  if (window.cvPDFViewer) {
    const event = { target: { textContent: tabName === 'preview' ? 'Preview' : 'Details' } };
    window.cvPDFViewer.handleTabSwitch(event);
  }
};

window.toggleFullscreen = function() {
  if (window.cvPDFViewer) {
    window.cvPDFViewer.toggleFullscreen();
  }
};

window.openInNewTab = function() {
  if (window.cvPDFViewer) {
    window.cvPDFViewer.openInNewTab();
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  window.cvPDFViewer = new CVPDFViewer();
  console.log('CV PDF Viewer initialized');
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CVPDFViewer;
}
