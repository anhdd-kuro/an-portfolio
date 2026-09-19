/* Thuy An Portfolio -- shared behaviour: mobile menu, lang dropdown toggle,
   banner hotspots, side scroll/top button, back link.
   Text is now baked per-locale at build time (Astro / astro-site), so this
   file no longer does any runtime i18n -- language links are plain <a> tags
   pointing at /en /jp /vi and just navigate normally. */
(function () {
  /* ---- LQIP cleanup: transparent artwork must not keep the preview underneath ---- */
  function initImagePlaceholders() {
    document.querySelectorAll("img[data-lqip]").forEach(function (img) {
      function clearPlaceholder() {
        img.removeAttribute("data-lqip");
        img.style.removeProperty("--optimized-image-placeholder");
      }

      if (img.complete && img.naturalWidth > 0) clearPlaceholder();
      else img.addEventListener("load", clearPlaceholder, { once: true });
    });
  }

  /* ---- Banner hotspots: swap in the matching animated drawing on hover ---- */
  function initHotspots() {
    var spots = document.querySelectorAll("a.hot");

    if (!spots.length) return;
    var coarse = window.matchMedia("(hover: none)").matches;
    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function restart(a) {
      // replay the drawing from its first frame
      var g = a.querySelector(".hot-anim");

      if (!g) return;
      var src = g.getAttribute("data-gif");
      g.removeAttribute("src");
      g.setAttribute("src", src);
    }

    spots.forEach(function (a) {
      if (!coarse) {
        a.addEventListener("mouseenter", function () {
          restart(a);
        });
        a.addEventListener("focus", function () {
          restart(a);
        });
      } else {
        a.addEventListener("click", function (e) {
          if (a.dataset.going) return;
          e.preventDefault();
          spots.forEach(function (o) {
            o.classList.remove("on");
          });
          restart(a);
          a.classList.add("on");
          a.dataset.going = "1";
          setTimeout(
            function () {
              window.location.href = a.getAttribute("href");
            },
            reduce ? 120 : 800,
          );
        });
      }
    });
  }

  /* ---- Language dropdown open/close (tablet / desktop) ---- */
  function setDropdownState(dd, open) {
    var btn = dd.querySelector(".lang-dd-btn");
    var list = dd.querySelector(".lang-dd-list");

    dd.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    list.setAttribute("aria-hidden", open ? "false" : "true");

    if (open) list.removeAttribute("inert");
    else list.setAttribute("inert", "");
  }

  function closeDropdowns() {
    document.querySelectorAll(".lang-dd.open").forEach(function (dd) {
      setDropdownState(dd, false);
    });
  }

  function initLangDropdown() {
    document.querySelectorAll(".lang-dd").forEach(function (dd) {
      var btn = dd.querySelector(".lang-dd-btn");
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var open = !dd.classList.contains("open");
        closeDropdowns();
        setDropdownState(dd, open);
      });
    });
    document.addEventListener("click", closeDropdowns);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeDropdowns();
    });
  }

  function initMenu() {
    var btn = document.getElementById("menu-toggle");
    var menu = document.getElementById("mobile-menu");

    if (!btn || !menu) return;

    function set(open) {
      menu.classList.toggle("open", open);
      document.body.classList.toggle("menu-open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      menu.setAttribute("aria-hidden", open ? "false" : "true");

      if (open) menu.removeAttribute("inert");
      else menu.setAttribute("inert", "");

      btn.style.backgroundImage = open
        ? "url(/assets/icons/close.png)"
        : "url(/assets/icons/menu.png)";
    }

    btn.addEventListener("click", function () {
      set(!menu.classList.contains("open"));
    });
    var closeBtn = document.getElementById("menu-close");

    if (closeBtn)
      closeBtn.addEventListener("click", function () {
        set(false);
      });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") set(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 680) set(false);
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        set(false);
      });
    });
  }

  /* ---- Fixed side button: scroll-down -> back-to-top at the page bottom ---- */
  function initSideScroll() {
    var btn = document.getElementById("side-scroll");

    if (!btn) return;
    var smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var scrollLabel = btn.getAttribute("data-scroll-label") || "Scroll";
    var topLabel = btn.getAttribute("data-totop-label") || "Back to top";

    function update() {
      var doc = document.documentElement;
      var scrollable = doc.scrollHeight - window.innerHeight;

      if (scrollable < 40) {
        btn.classList.remove("show", "at-end");

        return;
      } // nothing to scroll

      btn.classList.add("show");
      var atEnd = window.scrollY >= scrollable - 24; // a little tolerance for mobile rubber-banding
      btn.classList.toggle("at-end", atEnd);
      var label = atEnd ? topLabel : scrollLabel;
      btn.title = label;
      btn.setAttribute("aria-label", label);
      var sr = btn.querySelector(".sr-only");

      if (sr) sr.textContent = label;
    }

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      var top = btn.classList.contains("at-end") ? 0 : window.scrollY + window.innerHeight * 0.9;
      window.scrollTo({ top: top, behavior: smooth ? "smooth" : "auto" });
    });

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  function initBack() {
    var b = document.getElementById("back-link");

    if (!b) return;
    b.addEventListener("click", function (e) {
      if (document.referrer && new URL(document.referrer).origin === location.origin) {
        e.preventDefault();
        history.back();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initImagePlaceholders();
    initHotspots();
    initLangDropdown();
    initMenu();
    initSideScroll();
    initBack();
  });
})();
