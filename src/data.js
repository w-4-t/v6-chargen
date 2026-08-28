(() => {
  "use strict";

  const LANGUAGE_KEY = "vtm_v6_alpha_chargen_language";
  const core = window.V6_RULES;
  const locales = window.V6_LOCALES || {};
  if (!core) throw new Error("V6_RULES is not loaded");
  if (!locales.en || !locales.uk) throw new Error("V6 locale packs are not loaded");

  const clone = (value) => {
    if (Array.isArray(value)) return value.map(clone);
    if (value && typeof value === "object") {
      const out = {};
      for (const [k, v] of Object.entries(value)) out[k] = clone(v);
      return out;
    }
    return value;
  };

  function merge(base, overlay) {
    if (overlay === undefined) return clone(base);
    if (base === undefined) return clone(overlay);
    if (Array.isArray(base) && Array.isArray(overlay)) {
      const overlayById = new Map(
        overlay
          .filter((x) => x && typeof x === "object" && typeof x.id === "string")
          .map((x) => [x.id, x]),
      );
      if (overlayById.size) {
        const out = base.map((item) => {
          if (item && typeof item === "object" && typeof item.id === "string")
            return merge(item, overlayById.get(item.id));
          return clone(item);
        });
        for (const item of overlay) {
          if (
            item &&
            typeof item === "object" &&
            typeof item.id === "string" &&
            !base.some((x) => x?.id === item.id)
          )
            out.push(clone(item));
        }
        return out;
      }
      return overlay.map((item, i) => merge(base[i], item));
    }
    if (
      base &&
      overlay &&
      typeof base === "object" &&
      typeof overlay === "object" &&
      !Array.isArray(base) &&
      !Array.isArray(overlay)
    ) {
      const out = clone(base);
      for (const [k, v] of Object.entries(overlay)) out[k] = merge(base[k], v);
      return out;
    }
    return clone(overlay);
  }

  const DEFAULT_LOCALE = "en";
  const cache = new Map();
  function localeIds() {
    return Object.keys(locales);
  }
  function normalizeLocale(locale) {
    return Object.prototype.hasOwnProperty.call(locales, locale) ? locale : DEFAULT_LOCALE;
  }
  function forLocale(locale) {
    const id = normalizeLocale(locale);
    if (!cache.has(id)) cache.set(id, merge(core, locales[id].rules || {}));
    return cache.get(id);
  }
  function currentLocale() {
    return normalizeLocale(
      window.V6I18N?.getLocale?.() || localStorage.getItem(LANGUAGE_KEY) || DEFAULT_LOCALE,
    );
  }
  function currentData() {
    return forLocale(currentLocale());
  }
  function categoryLabel(kind, id, locale = currentLocale()) {
    return locales[normalizeLocale(locale)]?.categories?.[kind]?.[id] || String(id || "");
  }

  function focusLabelInData(data, skillId, ref) {
    const skill = (data.skills || []).find((x) => x.id === skillId);
    const direct = (skill?.focuses || []).find((x) => x.id === ref)?.name;
    if (direct) return direct;
    for (const lp of data.lifepaths || []) {
      const entry = (lp.skills || []).find((x) => x.skill === skillId);
      const label = entry?.recommendationLabels?.[ref];
      if (label) return label;
    }
    return "";
  }
  function focusLabel(skillId, ref, locale = currentLocale()) {
    if (!ref) return "";
    const first = normalizeLocale(locale);
    const order = [first, ...localeIds().filter((id) => id !== first)];
    for (const id of order) {
      const label = focusLabelInData(forLocale(id), skillId, ref);
      if (label) return label;
    }
    return String(ref);
  }
  function focusRefForLabel(skillId, value) {
    const needle = String(value || "").trim();
    if (!needle) return null;
    for (const locale of localeIds()) {
      const data = forLocale(locale);
      const skill = (data.skills || []).find((x) => x.id === skillId);
      const direct = (skill?.focuses || []).find((x) => x.name === needle);
      if (direct) return direct.id;
      for (const lp of data.lifepaths || []) {
        const entry = (lp.skills || []).find((x) => x.skill === skillId);
        for (const [ref, label] of Object.entries(entry?.recommendationLabels || {}))
          if (label === needle) return ref;
      }
    }
    return null;
  }

  const current = new Proxy(
    {},
    {
      get(_target, prop) {
        return currentData()[prop];
      },
      ownKeys() {
        return Reflect.ownKeys(currentData());
      },
      getOwnPropertyDescriptor() {
        return { enumerable: true, configurable: true };
      },
    },
  );

  window.V6Data = {
    core,
    locales,
    current,
    defaultLocale: DEFAULT_LOCALE,
    localeIds,
    normalizeLocale,
    forLocale,
    getLocale: currentLocale,
    categoryLabel,
    focusLabel,
    focusRefForLabel,
  };
})();
