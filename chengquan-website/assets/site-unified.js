/* Shared navigation: independent of legacy page-specific menu handlers. */
(() => {
  const button = document.querySelector('.cq-nav-toggle');
  const menu = document.querySelector('.cq-header #nav-list');
  if (!button || !menu) return;
  const setOpen = open => {
    menu.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
  };
  button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      setOpen(false); button.focus();
    }
  });
  menu.addEventListener('click', event => { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('click', event => {
    if (!event.target.closest('.cq-header')) setOpen(false);
  });
  matchMedia('(min-width:1200px)').addEventListener('change', () => setOpen(false));
})();
