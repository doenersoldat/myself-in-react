import renderer from 'react-test-renderer'
import { test } from 'vitest'
import App from './App'

test('Renders app component with Hello World', () => {
	const component = renderer.create(<App />)
	console.log(component.toJSON())
})
