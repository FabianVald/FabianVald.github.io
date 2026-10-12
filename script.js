(function () {
  'use strict';

  // Scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // News filter
  var chips = document.querySelectorAll('.chip');
  var items = document.querySelectorAll('.item');
  var blocks = document.querySelectorAll('.year-block');

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.getAttribute('data-filter');
      chips.forEach(function (c) { c.classList.toggle('active', c === chip); });
      items.forEach(function (it) {
        it.classList.toggle('hidden', f !== 'all' && it.getAttribute('data-cat') !== f);
      });
      // hide years with no visible items
      blocks.forEach(function (b) {
        var any = b.querySelector('.item:not(.hidden)');
        b.style.display = any ? '' : 'none';
      });
    });
  });

  // Scroll progress + current nav link
  var bar = document.getElementById('progress');
  var links = document.querySelectorAll('.globalnav ul a');
  var sections = Array.prototype.map.call(links, function (a) {
    return document.querySelector(a.getAttribute('href'));
  });

  function onScroll() {
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    if (bar && max > 0) bar.style.width = (h.scrollTop / max * 100) + '%';
    var y = h.scrollTop + 120;
    links.forEach(function (a, i) {
      var s = sections[i];
      var on = s && s.offsetTop <= y && s.offsetTop + s.offsetHeight > y;
      a.classList.toggle('current', !!on);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Copy email address (hero and contact section)
  document.querySelectorAll('.copy-mail').forEach(function (btn) {
    var msg = btn.parentElement.nextElementSibling;
    btn.addEventListener('click', function () {
      var mail = btn.getAttribute('data-mail');
      var done = function (ok) {
        if (!msg) return;
        msg.textContent = (ok ? btn.getAttribute('data-ok') : btn.getAttribute('data-fail')) + ' ' + mail;
        setTimeout(function () { msg.textContent = ''; }, 4000);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(mail).then(function () { done(true); }, function () { done(false); });
      } else {
        done(false);
      }
    });
  });
})();
