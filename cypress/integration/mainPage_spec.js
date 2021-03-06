describe('Main Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('User should see the nav bar, the input field which they can type into and submit information, the submit button, the list of times submitted, and the avg minutes', () => {
    cy.get('.nav-bar')
    .get('svg')
    .get('label').contains('Race Time')
    .get('input').type('02:00 PM, DAY 19')
    .get('button').contains('Submit').click()
    .get('input').type('02:00 PM, DAY 20')
    .get('button').contains('Submit').click()
    .get('input').type('01:58 PM, DAY 20')
    .get('button').contains('Submit').click()
    .get('.input-list')
    .children('li')
    .eq(0)
    .contains('02:00 PM, DAY 19')
    .get('.input-list')
    .children('li')
    .eq(1)
    .contains('02:00 PM, DAY 20')
    .get('.input-list')
    .children('li')
    .eq(2)
    .contains('01:58 PM, DAY 20')
    .get('.avg-display').contains('27239 minutes, on average.')
  })

  it('User should see O minutes before they input any data', () => {
    cy.get('input')
    .get('.avg-display').contains('0 minutes, on average')
  })

})

