// small interactive behaviors: theme toggle, menu toggle, set year
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // theme toggle
  const THEME_KEY = 'site-theme';
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');

  function setTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
  }

  // init
  (function initTheme(){
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved) {
        setTheme(saved);
      } else {
        // prefer light by default; if user prefers dark in OS, you can enable automatically:
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          setTheme('dark');
        } else {
          setTheme('light');
        }
      }
    } catch(e){}
  })();

  if (btn){
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      setTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  // mobile menu
  const menuBtn = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
    // close menu on link click (mobile)
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('show');
    }));
  }
})();
