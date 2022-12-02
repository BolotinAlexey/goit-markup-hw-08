(() => {
  const menuBtn = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-menu]');

  const toggleMenu = () => {
    const isMenuOpen = menuBtn.getAttribute('aria-expanded') === 'true' || false;
    menuBtn.classList.toggle('is-open');
    menu.classList.toggle('is-open');

    menuBtn.setAttribute('aria-expanded', !isMenuOpen);

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  menuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    menu.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
