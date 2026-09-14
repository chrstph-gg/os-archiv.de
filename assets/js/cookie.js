(function () {
  'use strict';
  var KEY = 'osarchiv-consent';

  function stored() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function build() {
    if (stored()) return;

    var el = document.createElement('div');
    el.className = 'cookie';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-live', 'polite');
    el.setAttribute('aria-label', 'Hinweis zu Cookies');
    el.innerHTML =
      '<h2><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a9 9 0 1 0 9 9 3.5 3.5 0 0 1-4-4 3.5 3.5 0 0 1-5-5Z"/><path d="M9 10h.01M13 14h.01M15.5 10.5h.01"/></svg>Cookies & Datenschutz</h2>' +
      '<p>Diese Website nutzt ausschließlich technisch notwendige Speicherung im Browser – ' +
      'etwa um deine Auswahl hier zu merken. Es findet <strong>kein Tracking</strong> und ' +
      'keine Weitergabe an Dritte statt. Details in der ' +
      '<a href="datenschutz.html">Datenschutzerklärung</a>.</p>' +
      '<div class="cookie-actions">' +
        '<button type="button" class="cookie-decline" data-v="essential">Nur notwendige</button>' +
        '<button type="button" class="cookie-accept" data-v="all">Verstanden</button>' +
      '</div>';

    document.body.appendChild(el);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { el.classList.add('show'); });
    });

    el.addEventListener('click', function (e) {
      var b = e.target.closest('button');
      if (!b) return;
      save(b.dataset.v);
      el.classList.remove('show');
      setTimeout(function () { el.remove(); }, 460);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
