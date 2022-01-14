import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../translations/en/translation.json";
import pt_BR from "../translations/pt_BR/translation.json";

const resources = {
  en,
  pt_BR,
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
