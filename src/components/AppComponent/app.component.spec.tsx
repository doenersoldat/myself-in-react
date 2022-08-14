import { create } from 'react-test-renderer'
import { test } from 'vitest'
import AppComponent from './app.component'

test('Renders app component', () => {
	const component = create(<AppComponent />)
	const result = component.toJSON()
	expect(result).toBeDefined()
})
