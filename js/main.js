// =========================================================
// General site interactions
// =========================================================

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
    // Close menu after clicking a link (mobile)
    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Generic WhatsApp contact link
  const waLink = document.getElementById('contactWhatsapp');
  if (waLink) {
    waLink.href = `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I\'d like to know more about Just Detail services.')}`;
  }

  // Show "My Dashboard" instead of "Log In" if the visitor already has a session
  const navAccountLink = document.getElementById('navAccountLink');
  if (navAccountLink && typeof supabaseClient !== 'undefined') {
    supabaseClient.auth.getUser().then(({ data }) => {
      if (data && data.user) {
        navAccountLink.textContent = 'My Dashboard';
        navAccountLink.href = 'dashboard.html';
      }
    });
  }
});
