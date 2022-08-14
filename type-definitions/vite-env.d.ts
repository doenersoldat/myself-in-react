/* eslint-disable spaced-comment */
/// <reference types="vite/client" />
declare module '*.scss' {
	const content: { [className: string]: string }
	export = content
}
