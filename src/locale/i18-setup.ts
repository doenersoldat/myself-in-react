import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import generalEn from './en/general.json'
import generalDe from './de/general.json'

i18next.use(initReactI18next).init({
	resources: {
		en: {
			general: generalEn,
		},
		de: {
			general: generalDe,
		},
	},
	lng: 'de', // if you're using a language detector, do not define the lng option
	fallbackLng: 'de',

	interpolation: {
		escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
	},
})
