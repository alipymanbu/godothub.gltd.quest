(function () {
  'use strict';

  // 绑定所有 data-link 按钮（网盘入口唯一来源：links.js 的 SITE_LINKS）
  document.querySelectorAll('[data-link]').forEach(function (el) {
    var key = el.getAttribute('data-link');
    el.addEventListener('click', function (ev) {
      var url = window.SITE_LINKS && window.SITE_LINKS[key];
      if (url) {
        ev.preventDefault();
        window.open(url, '_blank', 'noopener');
      }
    });
  });

  // 移动端折叠导航
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // 返回顶部按钮：下滚后出现
  var topBtn = document.querySelector('.fab-top');
  if (topBtn) {
    var onScroll = function () {
      if (window.scrollY > 420) {
        topBtn.classList.add('fab-show');
      } else {
        topBtn.classList.remove('fab-show');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    topBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
