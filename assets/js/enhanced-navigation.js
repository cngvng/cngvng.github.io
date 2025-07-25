/* ==========================================================================
   Enhanced Navigation for Academic Black Theme
   ========================================================================== */

(function() {
  'use strict';

  // Navigation state management
  let isMenuOpen = false;
  let scrollPosition = 0;
  let ticking = false;

  // DOM elements
  const masthead = document.querySelector('.masthead');
  const mobileMenuButton = document.querySelector('.greedy-nav button');
  const visibleLinks = document.querySelector('.greedy-nav .visible-links');
  const hiddenLinks = document.querySelector('.greedy-nav .hidden-links');

  // Initialize enhanced navigation
  function initEnhancedNavigation() {
    setupMobileMenu();
    setupScrollEffects();
    setupActivePageHighlighting();
    setupAccessibility();
    setupSmoothScrolling();
  }

  // Mobile menu functionality
  function setupMobileMenu() {
    if (!mobileMenuButton || !visibleLinks) return;

    // Create mobile menu toggle functionality
    mobileMenuButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleMobileMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (isMenuOpen && !e.target.closest('.greedy-nav')) {
        closeMobileMenu();
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMobileMenu();
        mobileMenuButton.focus();
      }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768 && isMenuOpen) {
        closeMobileMenu();
      }
    });
  }

  function toggleMobileMenu() {
    if (isMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    isMenuOpen = true;
    visibleLinks.classList.add('show');
    mobileMenuButton.setAttribute('aria-expanded', 'true');
    mobileMenuButton.setAttribute('aria-label', 'Close menu');
    
    // Add animation class
    visibleLinks.style.opacity = '0';
    visibleLinks.style.transform = 'translateY(-10px)';
    
    requestAnimationFrame(() => {
      visibleLinks.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      visibleLinks.style.opacity = '1';
      visibleLinks.style.transform = 'translateY(0)';
    });

    // Focus management
    const firstLink = visibleLinks.querySelector('a');
    if (firstLink) {
      setTimeout(() => firstLink.focus(), 100);
    }
  }

  function closeMobileMenu() {
    isMenuOpen = false;
    visibleLinks.classList.remove('show');
    mobileMenuButton.setAttribute('aria-expanded', 'false');
    mobileMenuButton.setAttribute('aria-label', 'Open menu');
    
    // Remove inline styles
    setTimeout(() => {
      visibleLinks.style.transition = '';
      visibleLinks.style.opacity = '';
      visibleLinks.style.transform = '';
    }, 300);
  }

  // Scroll effects for masthead
  function setupScrollEffects() {
    if (!masthead) return;

    window.addEventListener('scroll', function() {
      scrollPosition = window.pageYOffset;
      
      if (!ticking) {
        requestAnimationFrame(updateMasthead);
        ticking = true;
      }
    });
  }

  function updateMasthead() {
    if (scrollPosition > 100) {
      masthead.classList.add('masthead--scrolled');
    } else {
      masthead.classList.remove('masthead--scrolled');
    }
    ticking = false;
  }

  // Active page highlighting
  function setupActivePageHighlighting() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.greedy-nav a:not(.site-title)');

    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      
      if (currentPath === linkPath || 
          (linkPath !== '/' && currentPath.startsWith(linkPath))) {
        link.classList.add('current');
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  // Accessibility enhancements
  function setupAccessibility() {
    // Add skip to content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: var(--black-accent, #2c5aa0);
      color: white;
      padding: 8px;
      text-decoration: none;
      border-radius: 4px;
      z-index: 1000;
      transition: top 0.3s ease;
    `;
    
    skipLink.addEventListener('focus', function() {
      this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
      this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Enhance button accessibility
    if (mobileMenuButton) {
      mobileMenuButton.setAttribute('aria-expanded', 'false');
      mobileMenuButton.setAttribute('aria-label', 'Open menu');
      mobileMenuButton.setAttribute('aria-controls', 'site-nav');
    }

    // Add keyboard navigation for dropdown
    if (hiddenLinks) {
      const hiddenLinkItems = hiddenLinks.querySelectorAll('a');
      hiddenLinkItems.forEach((link, index) => {
        link.addEventListener('keydown', function(e) {
          if (e.key === 'ArrowDown' && index < hiddenLinkItems.length - 1) {
            e.preventDefault();
            hiddenLinkItems[index + 1].focus();
          } else if (e.key === 'ArrowUp' && index > 0) {
            e.preventDefault();
            hiddenLinkItems[index - 1].focus();
          }
        });
      });
    }
  }

  // Smooth scrolling for anchor links
  function setupSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          const headerOffset = masthead ? masthead.offsetHeight : 0;
          const targetPosition = targetElement.offsetTop - headerOffset - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          
          // Update focus for accessibility
          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus();
          targetElement.addEventListener('blur', function() {
            this.removeAttribute('tabindex');
          }, { once: true });
        }
      });
    });
  }

  // Enhanced masthead with scroll effects CSS
  function addScrollEffectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .masthead {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .masthead--scrolled {
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
        background: rgba(26, 26, 26, 0.98);
      }
      
      .skip-link:focus {
        transform: translateY(0);
      }
      
      @media (max-width: 768px) {
        .greedy-nav .visible-links.show {
          display: flex !important;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(26, 26, 26, 0.98);
          border: 1px solid var(--black-border, #333);
          border-radius: 4px;
          margin-top: 0.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          z-index: 999;
        }
        
        .greedy-nav .visible-links.show li {
          margin: 0;
          border-bottom: 1px solid var(--black-border, #333);
        }
        
        .greedy-nav .visible-links.show li:last-child {
          border-bottom: none;
        }
        
        .greedy-nav .visible-links.show a {
          display: block;
          padding: 1rem;
          margin: 0;
          border-radius: 0;
          transition: all 0.3s ease;
        }
        
        .greedy-nav .visible-links.show a:hover {
          background-color: rgba(44, 90, 160, 0.1);
          padding-left: 1.5rem;
        }
      }
      
      /* Focus styles for better accessibility */
      .greedy-nav a:focus {
        outline: 2px solid var(--black-accent, #2c5aa0);
        outline-offset: 2px;
        border-radius: 2px;
      }
      
      /* Enhanced navigation button */
      .greedy-nav button {
        position: relative;
        overflow: hidden;
      }
      
      .greedy-nav button::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(44, 90, 160, 0.2);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.3s ease, height 0.3s ease;
      }
      
      .greedy-nav button:active::after {
        width: 100px;
        height: 100px;
      }
    `;
    document.head.appendChild(style);
  }

  // Intersection Observer for scroll animations
  function setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe content cards and sections
    const animateElements = document.querySelectorAll('.content-card, .archive__item, .page__content > *');
    animateElements.forEach(el => {
      observer.observe(el);
    });
  }

  // Performance optimization
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Initialize everything when DOM is ready
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initEnhancedNavigation();
        addScrollEffectStyles();
        setupScrollAnimations();
      });
    } else {
      initEnhancedNavigation();
      addScrollEffectStyles();
      setupScrollAnimations();
    }
  }

  // Start initialization
  init();

  // Expose public API if needed
  window.EnhancedNavigation = {
    openMobileMenu,
    closeMobileMenu,
    toggleMobileMenu
  };

})();
