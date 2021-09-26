describe('Adding recipes to My Recipes section', ()=> {

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
  });

  it('As a user, I should see a bookmark icon on a recipe card that is unchecked', () => {
    cy.get('.favorite-toggle')
      .should('exist')
  });

  it('As a user, when I click the bookmark icon, it should turn red', () => {
    cy.get('.favorite-toggle')
      .click()
    cy.get('.favorite-toggle')
      .should('exist')
  });

  it('As a user, I should see my selection in the My Recipe section of the app', () => {
    cy.get('.favorite-toggle')
      .click()
      cy.get('[href="/favorites"]')
        .click()
        .url()
        .should('include', '/favorites')
      .get('article')
        .should('have.length', 1)
      .get('article').get('.card-img')
        .should('exist')
      .get('article')
        .contains('Carrot Limeade')
      .get('article')
        .contains('cuisine: american')
      .get('article')
        .contains('calories: 357')
      .get('article')
        .contains('makes 8 servings')
      .get('article')
        .get('.favorite-toggle')      
  });

});