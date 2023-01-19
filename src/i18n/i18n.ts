import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJson from './en.json'
import plJson from './pl.json'

i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: enJson
      },
      pl: {
        translation: plJson
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });
  

export default i18n;