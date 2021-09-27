require('dotenv').config();

const apiKey = process.env.REACT_APP_API_KEY;
const appID = process.env.REACT_APP_ID;
const url = `https://api.edamam.com/api/recipes/v2?q=hotdog&app_id=${appID}&app_key=${apiKey}&type=public`;

describe('Error handling for 404 error', () => {
  beforeEach(() => {
    // cy.intercept('GET', `http://localhost:3000/recipes`, {statusCode: 400, body: {}} )
    cy.visit('http://localhost:3000')
    
  });

  it('As a user, I should see a message that displays a 400 level error from the fetch response.', () => {
    cy.intercept('GET', url, {statusCode: 400, body: {}} )
    cy.get('.search-bar')
    .type('hot dogs')
    .get('.submit-btn')
    .click()
  })

});