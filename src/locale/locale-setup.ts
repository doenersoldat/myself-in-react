import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'

import { DectectorOptions } from './detector-options'
import { HttpApiOptions } from './backend-options'

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.use(HttpApi)
	.init({
		detection: DectectorOptions,
		backend: HttpApiOptions,
		ns: 'app.component',
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
		},
	})
