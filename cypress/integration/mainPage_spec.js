describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('User should see the nav bar, the input field, submit button, and the avg minutes', () => {
    cy.get('.nav-bar').contains('Bitly Logo')
    .get('label').contains('Race Time:')
    .get('input').type('Hello World')
    .get('button').contains('Submit')
    .get('.avg-display').contains('Your Avg Time in')
  })

})