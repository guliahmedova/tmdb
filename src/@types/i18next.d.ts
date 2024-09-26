import "i18next";
import en from "../shared/utils/i18n/locales/en/en.json";
import fr from "../shared/utils/i18n/locales/fr/fr.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: {
      en: typeof en;
      fr: typeof fr;
    };
  }
}
