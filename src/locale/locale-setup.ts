import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import generalEn from './en/general.json'
import generalDe from './de/general.json'
import { DectectorOptions } from './detector-options'

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
		detection: DectectorOptions,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
		},
	})
