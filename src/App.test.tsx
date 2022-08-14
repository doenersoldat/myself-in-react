import { create } from 'react-test-renderer'
import { test } from 'vitest'
import App from './App'

test('Renders app component', () => {
	const component = create(<App />)
	const result = component.toJSON()
	expect(result).toBeDefined()
})
