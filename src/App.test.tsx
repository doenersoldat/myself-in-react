import { create } from 'react-test-renderer'
import { test } from 'vitest'
import App from './App'

test('Renders app component with Hello World', () => {
	const component = create(<App />)
	const result = component.toJSON()
	expect(result).toBeDefined()
})
