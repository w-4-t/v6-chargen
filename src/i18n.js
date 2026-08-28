(() => {
  "use strict";

  const KEY = "vtm_v6_alpha_chargen_language";
  let locale = window.V6Data.normalizeLocale(
    localStorage.getItem(KEY) || window.V6Data.defaultLocale,
  );

  function localePack(id = locale) {
    return window.V6Data.locales[window.V6Data.normalizeLocale(id)] || {};
  }

  function interpolate(template, vars = {}) {
    return String(template ?? "").replace(/\{([A-Za-z0-9_]+)\}/g, (_m, key) =>
      Object.prototype.hasOwnProperty.call(vars, key)
        ? String(vars[key] ?? "")
        : `{${key}}`,
    );
  }

  function text(key) {
    const pack = localePack()?.strings?.text || {};
    const fallback = localePack(window.V6Data.defaultLocale)?.strings?.text || {};
    if (Object.prototype.hasOwnProperty.call(pack, key)) return pack[key];
    if (Object.prototype.hasOwnProperty.call(fallback, key)) return fallback[key];
    return String(key ?? "");
  }

  function msg(key, vars = {}) {
    const pack = localePack()?.strings?.messages || {};
    const fallback = localePack(window.V6Data.defaultLocale)?.strings?.messages || {};
    const template = Object.prototype.hasOwnProperty.call(pack, key)
      ? pack[key]
      : fallback[key];
    return template === undefined ? String(key ?? "") : interpolate(template, vars);
  }

  function applyKeyed(root = document) {
    (root.querySelectorAll?.("[data-i18n]") || []).forEach((el) => {
      el.textContent = text(el.getAttribute("data-i18n"));
    });
    (root.querySelectorAll?.("[data-i18n-title]") || []).forEach((el) => {
      el.setAttribute("title", text(el.getAttribute("data-i18n-title")));
    });
    (root.querySelectorAll?.("[data-i18n-aria]") || []).forEach((el) => {
      el.setAttribute("aria-label", text(el.getAttribute("data-i18n-aria")));
    });
    (root.querySelectorAll?.("[data-i18n-placeholder]") || []).forEach((el) => {
      el.setAttribute("placeholder", text(el.getAttribute("data-i18n-placeholder")));
    });
  }

  function updateControls() {
    const toggle = localePack()?.interface?.languageToggle || {};
    for (const id of ["langToggleBtn", "mobileLangToggleBtn"]) {
      const button = document.getElementById(id);
      if (!button) continue;
      button.textContent = toggle.label || "";
      button.title = toggle.title || "";
      button.setAttribute("aria-label", toggle.title || "");
    }
  }

  function apply(root = document) {
    applyKeyed(root);
    const ui = localePack()?.interface || {};
    if (document.documentElement) document.documentElement.lang = ui.documentLang || locale;
    document.title = ui.documentTitle || "";
    updateControls();
  }

  function setLocale(value) {
    locale = window.V6Data.normalizeLocale(value);
    localStorage.setItem(KEY, locale);
  }

  function toggle() {
    const ids = window.V6Data.localeIds();
    const index = Math.max(0, ids.indexOf(locale));
    setLocale(ids[(index + 1) % Math.max(1, ids.length)] || window.V6Data.defaultLocale);
  }

  function getLocale() {
    return locale;
  }

  window.V6I18N = {
    apply,
    updateControls,
    setLocale,
    toggle,
    getLocale,
    text,
    msg,
  };
})();
