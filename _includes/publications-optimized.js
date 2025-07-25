/**
 * Optimized Publications JavaScript
 * Handles performance improvements for large publication lists
 */

document.addEventListener('DOMContentLoaded', function() {
  // Lazy loading for publication images and media
  if ('IntersectionObserver' in window) {
    const lazyLoadOptions = {
      rootMargin: '50px 0px',
      threshold: 0.01
    };
    
    const lazyLoadObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const element = entry.target;
          
          // Load deferred content
          if (element.dataset.src) {
            element.src = element.dataset.src;
            element.removeAttribute('data-src');
          }
          
          // Trigger animations
          element.classList.add('loaded');
          
          lazyLoadObserver.unobserve(element);
        }
      });
    }, lazyLoadOptions);
    
    // Observe publication items for lazy loading
    document.querySelectorAll('.publication-item').forEach(function(item) {
      lazyLoadObserver.observe(item);
    });
  }
  
  // Optimize keyword hover effects
  const keywordElements = document.querySelectorAll('.keyword');
  keywordElements.forEach(function(keyword) {
    keyword.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-1px)';
    });
    
    keyword.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Virtual scrolling for large lists (if needed)
  const publicationsList = document.querySelector('.publications-container');
  if (publicationsList && document.querySelectorAll('.publication-item').length > 50) {
    // Implement virtual scrolling only for very large lists
    console.log('Large publication list detected - consider pagination');
  }
  
  // Debounced scroll handler for performance
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    
    scrollTimeout = setTimeout(function() {
      // Handle scroll-based optimizations
      const scrollY = window.scrollY;
      
      // Add/remove classes based on scroll position for performance
      document.body.classList.toggle('scrolled', scrollY > 100);
    }, 10);
  });
});

// Utility function to preload critical publication data
function preloadCriticalPublications() {
  const criticalItems = document.querySelectorAll('.publication-item[data-year="2024"], .publication-item[data-year="2023"]');
  
  criticalItems.forEach(function(item) {
    // Ensure recent publications are rendered immediately
    item.classList.add('priority-load');
  });
}

// Initialize optimizations
preloadCriticalPublications();
