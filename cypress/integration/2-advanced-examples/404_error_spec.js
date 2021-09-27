describe('Error handling for 404 error', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3000/recipes', {
      statusCode: 404,
      body: [
        {
          "errorCode": "404",
          "message": "Request not recognized",
          "params": [
            "failure"
          ]
        }
      ]
    })
    cy.visit('http://localhost:3000')
    
  });

  it('As a user, I should see a message that displays a 400 level error from the fetch response.', () => {
    cy.get('.search-bar')
    .type('hot dogs')
    .get('.submit-btn')
    .click()
  })

});