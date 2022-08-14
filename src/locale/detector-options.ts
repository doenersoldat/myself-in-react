import { DetectorOptions } from 'i18next-browser-languagedetector'

// on vitest window / document is not defined:
const documentElement = globalThis['window']?.document?.documentElement

export const DectectorOptions: DetectorOptions = {
	order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
	lookupQuerystring: 'lng',
	lookupCookie: 'i18next',
	lookupLocalStorage: 'lng',
	caches: ['localStorage'],
	htmlTag: documentElement,
}
