import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector, { DetectorOptions } from 'i18next-browser-languagedetector'

import generalEn from './en/general.json'
import generalDe from './de/general.json'

const dectectorOptions: DetectorOptions = {
	order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
	lookupQuerystring: 'lng',
	lookupCookie: 'i18next',
	lookupLocalStorage: 'lng',
	caches: ['localStorage'],
	htmlTag: document.documentElement,
}

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		resources: {
			en: {
				general: generalEn,
			},
			de: {
				general: generalDe,
			},
		},
		detection: dectectorOptions,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
		},
	})
