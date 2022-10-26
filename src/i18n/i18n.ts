import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ru from './ru.json'
import en from './en.json'
// import 'intl-pluralrules'

const resources = {
  ru: {
    translation: ru,
  },
  en: {
    translation: en,
  },
}

i18n.use(initReactI18next).init({
  lng: 'ru',
  resources,
  // keySeparator: true, // we do not use keys in form messages.welcome
  fallbackLng: '',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  react: {
    useSuspense: false,
  },
})
export default i18n
