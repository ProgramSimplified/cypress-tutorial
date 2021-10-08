describe('Find authors at smashing', () => {
  // hook, then every case can reuse it
  beforeEach(() => {
    // Open website
    cy.visit('/') // cypress.json baseUrl
  })

  it('Find the author Ramona Schwering', () => {
    // Route to wait for later
    // cy.intercept({
    //   url: '*/indexes/smashingmagazine/*',
    //   method: 'POST'
    // }).as('search') // With this alias Cypress will find the request again

    // Ensure site is fully loaded
    cy.get('.headline-content').should('be.visible')

    // Enter author’s name in search field
    cy.get('#js-search-input').type('Ramona Schwering')

    // Navigate to author’s article
    cy.get('h2 > a').first().click()

    // Open the author’s page
    cy.get('.author-post__author-title').click()

    // Check if we’re on the author’s site
    cy.contains('.author__title', 'Ramona Schwering').should('be.visible')

    // cy.wait('@search').its('response.statusCode').should('equal', 200)
  })
})
