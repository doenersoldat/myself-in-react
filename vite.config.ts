/* eslint-disable spaced-comment */
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
	plugins: [react()],
	root: 'src',
	build: {
		outDir: '../dist',
	},
	resolve: {
		alias: [{ find: '@components', replacement: path.resolve(__dirname, 'src/components/') }],
	},
})
