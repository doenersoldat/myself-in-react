import { DetectorOptions } from 'i18next-browser-languagedetector'

export const DectectorOptions: DetectorOptions = {
	order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
	lookupQuerystring: 'lng',
	lookupCookie: 'i18next',
	lookupLocalStorage: 'lng',
	caches: ['localStorage'],
	htmlTag: window.document.documentElement,
}
