import HelloWorldComponent from '@components/HelloWorldComponent'

describe('HelloWorldComponent', () => {
	it('Can render', () => {
		cy.mount(<HelloWorldComponent />)
	})
})
