describe('Translation tests', () => {
	it('EN translation', () => {
		cy.visit('/?lng=en')
		cy.contains('Hello World')
	})

	it('DE translation', () => {
		cy.visit('/?lng=de')
		cy.contains('Hallo Welt')
	})
})
