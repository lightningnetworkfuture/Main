const i18n = require("i18n");
i18n.configure({
  defaultLocale: "en-us",
  fallbacks: {
    "de-AT": "de-at",
    "nl-BE": "nl-be",
    "nl": "nl-be",
    "bg-BG": "bg-bg",
    "bg": "bg-bg",
    "hr-HR": "hr-hr",
    "hr": "hr-hr",
    "el-CY": "el-cy",
    "el": "el-cy",
    "cs-CZ": "cs-cz",
    "cs": "cs-cz",
    "da-DK": "da-dk",
    "da": "da-dk",
    "et-EE": "et-ee",
    "et": "et-ee",
    "fi-FI": "fi-fi",
    "fi": "fi-fi",
    "fr-FR": "fr-fr",
    "fr": "fr-fr",
    "de-DE": "de-de",
    "de": "de-de",
    "el-GR": "el-gr",
    "hu-HU": "hu-hu",
    "hu": "hu-hu",
    "ga-IE": "ga-ie",
    "ga": "ga-ie",
    "it-IT": "it-it",
    "it": "it-it",
    "lv-LV": "lv-lv",
    "lv": "lv-lv",
    "lt-LT": "lt-lt",
    "lt": "lt-lt",
    "fr-LU": "fr-lu",
    "fr": "fr-lu",
    "mt-MT": "mt-mt",
    "mt": "mt-mt",
    "nl-NL": "nl-nl",
    "nl": "nl-nl",
    "pl-PL": "pl-pl",
    "pl": "pl-pl",
    "pt-PT": "pt-pt",
    "pt": "pt-pt",
    "ro-RO": "ro-ro",
    "ro": "ro-ro",
    "sk-SK": "sk-sk",
    "sk": "sk-sk",
    "sl-SI": "sl-si",
    "sl": "sl-si",
    "es-ES": "es-es",
    "es": "es-es",
    "sv-SE": "sv-se",
    "sv": "sv-se",
    "tr-TR": "tr-tr",
    "tr": "tr-tr",
    "en-GB": "en-gb",
    "en-US": "en-us"
  },
  locales: [
    "de-at",
    "nl-be",
    "bg-bg",
    "hr-hr",
    "el-cy",
    "cs-cz",
    "da-dk",
    "et-ee",
    "fi-fi",
    "fr-fr",
    "de-de",
    "el-gr",
    "hu-hu",
    "ga-ie",
    "it-it",
    "lv-lv",
    "lt-lt",
    "fr-lu",
    "mt-mt",
    "nl-nl",
    "pl-pl",
    "pt-pt",
    "ro-ro",
    "sk-sk",
    "sl-si",
    "es-es",
    "sv-se",
    "tr-tr",
    "en-gb",
    "en-us"
  ],
  queryParameter: "locale",
  directory: "./locales"
});

module.exports = i18n;