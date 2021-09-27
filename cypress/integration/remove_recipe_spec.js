describe('Removing recipes from My Recipe section', () => {

  beforeEach(() => {
    localStorage.clear();
    cy.intercept('GET', '/recipes', {
      statusCode: 200,
      body: {
        "hits": [
          {
          "recipe": {
              "label": "Carrot Limeade",
              "image": "https://www.edamam.com/web-img/fc8/fc8e6d4ba4b0e0ea34aec2d54110e03a",
              "source": "Martha Stewart",
              "url": "https://www.marthastewart.com/1547130/carrot-limeade",
              "yield": 8.0,
              "calories": 356.8119479975469,
              "cuisineType": ["american"]
              }
            }
          ]
        }
      } 
    )
    cy.visit('http://localhost:3000')
    cy.get('.search-bar')
    .click()
    .type('carrot limeade')
      .get('.submit-btn')
      .click()
      cy.get('.favorite-toggle')
      .click()
      cy.get('[href="/favorites"]')
        .click()
  });

  it('As a user, I should be able to remove a favorited recipe by clicking the red favorite icon', () => {
    cy.get('.favorite-toggle')
    .click()
    cy.get('.error-display')
      .contains('You don\'t have any recipes saved yet. Go find some that you like!')
  });

});