/* 体态矫正 12 周训练计划 · 轻量交互
   站点内容全部为静态 HTML，脚本只负责导航状态与回到顶部，不承载任何数据。 */
(function () {
  'use strict';

  var page = document.body.getAttribute('data-page') || '';
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a[data-page]'));
  links.forEach(function (a) {
    if (a.getAttribute('data-page') === page) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

  var toggle = document.getElementById('nav-toggle');
  links.forEach(function (a) {
    a.addEventListener('click', function () {
      if (toggle) toggle.checked = false;
    });
  });

  var toTop = document.getElementById('to-top');
  if (toTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 520) toTop.classList.add('show');
      else toTop.classList.remove('show');
    }, { passive: true });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* 海报画廊：把 430px 宽的独立海报页面按卡片宽度等比缩放后嵌入预览。
     页面内容仍是静态的，脚本只计算缩放比；未执行脚本时预览仍显示海报左上角。 */
  var frames = Array.prototype.slice.call(document.querySelectorAll('.poster-frame'));
  if (frames.length) {
    function scaleFrames() {
      frames.forEach(function (frame) {
        var iframe = frame.querySelector('iframe');
        if (iframe) iframe.style.transform = 'scale(' + (frame.clientWidth / 430) + ')';
      });
    }
    scaleFrames();
    window.addEventListener('resize', scaleFrames, { passive: true });
  }
})();
