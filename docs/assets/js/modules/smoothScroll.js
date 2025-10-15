// ========================================
// SMOOTH SCROLL MODULE
// ========================================

/**
 * Handles smooth scrolling for anchor links
 */

export default class SmoothScroll {
  constructor() {
    this.init();
  }
  
  init() {
    // Select all anchor links that start with #
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
      link.addEventListener('click', (e) => this.handleClick(e));
    });
  }
  
  handleClick(e) {
    const href = e.currentTarget.getAttribute('href');
    
    // Skip if href is just "#"
    if (href === '#') {
      e.preventDefault();
      return;
    }
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      e.preventDefault();
      
      // Calculate offset (header height)
      const headerHeight = document.getElementById('header').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      // Smooth scroll
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Update URL without jumping
      if (history.pushState) {
        history.pushState(null, null, href);
      } else {
        // Fallback for older browsers
        location.hash = href;
      }
      
      // Focus on the target element for accessibility
      targetElement.setAttribute('tabindex', '-1');
      targetElement.focus();
    }
  }
}

