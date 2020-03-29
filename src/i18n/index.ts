import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as Localization from 'expo-localization'

import ptBRTranslation from './pt_BR.json'

const resources = {
  'pt-BR': ptBRTranslation,
}

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb): Promise<string> => {
    return Localization.getLocalizationAsync().then(locale => cb(locale.toString()))
  },
  init: (): void => {},
  cacheUserLanguage: (): void => {},
}

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pt-BR',
    keySeparator: '.',
    debug: __DEV__,
    ns: ['common'],
    interpolation: {
      escapeValue: false,
    },
    cache: {
      enabled: false,
    },
  })

export default i18n
