import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import AppComponentEN from './en/app-component.json'
import HelloWorldComponentEN from './en/hello-world.component.json'

import AppComponentDE from './de/app-component.json'
import HelloWorldComponentDE from './de/hello-world.component.json'

import { DectectorOptions } from './detector-options'

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		resources: {
			en: {
				AppComponent: AppComponentEN,
				HelloWorldComponent: HelloWorldComponentEN,
			},
			de: {
				AppComponent: AppComponentDE,
				HelloWorldComponent: HelloWorldComponentDE,
			},
		},
		detection: DectectorOptions,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
		},
	})
