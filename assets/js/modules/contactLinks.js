// ========================================
// CONTACT LINKS MODULE
// ========================================

/**
 * Handles contact buttons with dynamic links
 * (WhatsApp, Email, Phone)
 */

export default class ContactLinks {
  constructor() {
    this.phone = '5999993425';
    this.email = 'contacto@bastionelegalcorp.com';
    this.whatsappMessage = encodeURIComponent(
      'Hola, me gustaría obtener más información sobre sus servicios legales.'
    );
    
    this.init();
  }
  
  init() {
    // Setup contact action buttons
    this.setupContactButtons();
  }
  
  setupContactButtons() {
    const contactButtons = document.querySelectorAll('.contact__btn');
    
    contactButtons.forEach(button => {
      const buttonText = button.textContent.trim().toLowerCase();
      
      // Assign appropriate links based on button text
      if (buttonText.includes('agendar')) {
        // WhatsApp link
        button.href = `https://wa.me/${this.phone}?text=${this.whatsappMessage}`;
        button.setAttribute('target', '_blank');
        button.setAttribute('rel', 'noopener noreferrer');
      } else if (buttonText.includes('calcular')) {
        // Placeholder - could link to a calculator page or form
        button.href = `mailto:${this.email}?subject=Consulta sobre cálculo de pensión`;
        button.removeAttribute('target');
      } else if (buttonText.includes('iniciar')) {
        // Email link
        button.href = `mailto:${this.email}?subject=Iniciar proceso legal`;
        button.removeAttribute('target');
      }
    });
  }
}

