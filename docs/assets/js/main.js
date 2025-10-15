// ========================================
// MAIN JAVASCRIPT FILE
// ========================================

/**
 * Main entry point for all JavaScript functionality
 * Uses ES6 modules for better organization and maintainability
 */

// Import modules
import Animations from './modules/animations.js';
import ContactLinks from './modules/contactLinks.js';
import Navigation from './modules/navigation.js';
import SmoothScroll from './modules/smoothScroll.js';

/**
 * Initialize all modules when DOM is ready
 */
class App {
  constructor() {
    this.init();
  }
  
  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeModules());
    } else {
      this.initializeModules();
    }
  }
  
  initializeModules() {
    console.log('🚀 Bastione Legal Corp - Initializing...');
    
    try {
      // Initialize Navigation
      this.navigation = new Navigation();
      console.log('✅ Navigation initialized');
      
      // Initialize Smooth Scroll
      this.smoothScroll = new SmoothScroll();
      console.log('✅ Smooth Scroll initialized');
      
      // Initialize Animations
      this.animations = new Animations();
      console.log('✅ Animations initialized');
      
      // Initialize Contact Links
      this.contactLinks = new ContactLinks();
      console.log('✅ Contact Links initialized');
      
      console.log('✨ All modules loaded successfully!');
      
    } catch (error) {
      console.error('❌ Error initializing modules:', error);
    }
  }
}

// Create app instance
const app = new App();

// Export for potential external use
export default app;

