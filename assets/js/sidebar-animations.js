/* ==========================================================================
   Scroll-triggered Animations for Sidebar
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer for scroll-triggered animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        // For author URLs, animate children with stagger
        if (entry.target.classList.contains('author__urls')) {
          const links = entry.target.querySelectorAll('.author__url');
          links.forEach((link, index) => {
            setTimeout(() => {
              link.classList.add('animate-in');
            }, index * 100); // 100ms stagger between each link
          });
        }
      }
    });
  }, observerOptions);

  // Observe sidebar elements
  const sidebarElements = document.querySelectorAll('.author__avatar, .author__name, .author__bio, .author__urls');
  sidebarElements.forEach(el => observer.observe(el));

  // Enhanced smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add loading animation class to sidebar on page load
  setTimeout(() => {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.add('loaded');
    }
  }, 100);

  // Dynamic typing effect for author name (optional)
  const authorName = document.querySelector('.author__name');
  if (authorName && authorName.textContent) {
    const text = authorName.textContent;
    authorName.textContent = '';
    
    let index = 0;
    function typeWriter() {
      if (index < text.length) {
        authorName.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
      }
    }
    
    // Start typing effect when element becomes visible
    const nameObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(typeWriter, 500);
          nameObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    nameObserver.observe(authorName);
  }
});

// Scroll progress indicator for sidebar
function updateScrollProgress() {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar) return;
  
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  
  // Update CSS custom property for potential use in styling
  document.documentElement.style.setProperty('--scroll-progress', `${scrollPercent}%`);
}

window.addEventListener('scroll', updateScrollProgress);

// Resize handler for responsive adjustments
window.addEventListener('resize', function() {
  // Refresh sidebar behavior on resize
  const sidebar = document.querySelector('.sidebar');
  if (sidebar && window.innerWidth <= 768) {
    // Reset any transforms on mobile
    sidebar.style.transform = 'none';
  }
});
