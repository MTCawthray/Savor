describe('Error handling for 404 error', () => {
  beforeEach(() => {
    cy.intercept('GET', '/recipes', {
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
    cy.visit('https://localhost:3000')
  });

});