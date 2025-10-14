// ========================================
// NAVIGATION MODULE
// ========================================

/**
 * Handles mobile navigation toggle and active states
 */

export default class Navigation {
  constructor() {
    this.header = document.getElementById('header');
    this.navMenu = document.getElementById('nav-menu');
    this.navToggle = document.getElementById('nav-toggle');
    this.navLinks = document.querySelectorAll('.nav__link');
    
    this.init();
  }
  
  init() {
    if (!this.navToggle || !this.navMenu) {
      console.warn('Navigation elements not found');
      return;
    }
    
    // Mobile menu toggle
    this.navToggle.addEventListener('click', () => this.toggleMenu());
    
    // Close menu when clicking nav links and activate header
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeMenu();
        this.activateHeader(); // Move header to top:0 when clicking nav links
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => this.handleOutsideClick(e));
    
    // Handle active states
    this.updateActiveLink();
    window.addEventListener('scroll', () => this.updateActiveLink());
    
    // Handle scroll header background and position
    this.handleScrollHeader();
    window.addEventListener('scroll', () => this.handleScrollHeader());
  }
  
  toggleMenu() {
    const isExpanded = this.navToggle.getAttribute('aria-expanded') === 'true';
    
    this.navToggle.setAttribute('aria-expanded', !isExpanded);
    this.navMenu.classList.toggle('nav--active');
    document.body.classList.toggle('no-scroll');
    
    // Update aria-label
    this.navToggle.setAttribute(
      'aria-label',
      isExpanded ? 'Abrir menú' : 'Cerrar menú'
    );
  }
  
  closeMenu() {
    this.navToggle.setAttribute('aria-expanded', 'false');
    this.navMenu.classList.remove('nav--active');
    document.body.classList.remove('no-scroll');
    this.navToggle.setAttribute('aria-label', 'Abrir menú');
  }
  
  handleOutsideClick(e) {
    const isClickInside = this.navMenu.contains(e.target) || 
                         this.navToggle.contains(e.target);
    
    if (!isClickInside && this.navMenu.classList.contains('nav--active')) {
      this.closeMenu();
    }
  }
  
  updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 200; // Offset for better UX
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && 
          scrollPosition < sectionTop + sectionHeight) {
        this.navLinks.forEach(link => {
          link.classList.remove('nav__link--active');
          
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('nav__link--active');
          }
        });
      }
    });
  }
  
  handleScrollHeader() {
    // When user scrolls down, move header to top:0 and add scrolled class
    if (window.scrollY > 50) {
      this.activateHeader();
    } else {
      // When at top of page, return header to original position (top:80px on desktop)
      this.header.classList.remove('header--scrolled');
      this.header.classList.remove('header--active');
    }
  }
  
  /**
   * Activates header by moving it to top:0
   * Used when scrolling or clicking nav links
   */
  activateHeader() {
    this.header.classList.add('header--scrolled');
    this.header.classList.add('header--active');
  }
}

