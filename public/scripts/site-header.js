const header = document.querySelector('[data-site-header]');
const button = document.querySelector('.menu-button');
const navigation = document.querySelector('.header-navigation');

button?.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!open));
  navigation?.toggleAttribute('data-open', !open);
});

const markScrolled = () => header?.toggleAttribute('data-scrolled', window.scrollY > 8);
markScrolled();
window.addEventListener('scroll', markScrolled, { passive: true });
