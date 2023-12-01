describe('template spec', () => {
    it('Footer text', () => {
      cy.visit('localhost:3000')
      cy.get('.lotr').contains('LOTR Quote:')
    })
})
