/* eslint-disable spaced-comment */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	root: 'src',
	build: {
		outDir: '../dist',
	},
	test: {
		globals: true,
		setupFiles: ['../test/test-setup.ts'],
		include: ['**/*(*.)?{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
		coverage: {
			reporter: ['text', 'json', 'html'],
		},
	},
})
