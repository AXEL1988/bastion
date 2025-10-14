// ========================================
// ANIMATIONS MODULE
// ========================================

/**
 * Handles scroll-triggered animations using Intersection Observer
 */

export default class Animations {
  constructor() {
    this.observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15 // Trigger when 15% of element is visible
    };
    
    this.init();
  }
  
  init() {
    // Create observer
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      this.observerOptions
    );
    
    // Observe elements that should animate
    this.observeElements();
  }
  
  observeElements() {
    // Add animation classes to elements
    const animatedElements = document.querySelectorAll(`
      .about__card,
      .service__content,
      .team__member,
      .contact__content,
      .footer__brand,
      .footer__info,
      .footer__contact,
      .footer__social
    `);
    
    animatedElements.forEach((element, index) => {
      // Add initial state
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      
      // Add stagger delay
      element.style.transitionDelay = `${index * 0.1}s`;
      
      // Observe element
      this.observer.observe(element);
    });
  }
  
  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Element is visible, animate it
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        
        // Stop observing this element (animate only once)
        this.observer.unobserve(entry.target);
      }
    });
  }
  
  // Method to destroy observer if needed
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

