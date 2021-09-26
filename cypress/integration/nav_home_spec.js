describe('Navigate back home user flows', () => {

  beforeEach(() => {
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
  })

  it('As a user, I should be able to navigate back to the homepage by clicking on search in the header', () => {
    cy.get('.search-bar')
    .click()
    .type('carrot limeade')
      .get('.submit-btn')
      .click()
      .get('.header-links > [href="/"]')
        .click()
        .url()
        .should('contain', '/')
      .get('.search-bar')
      .get('header')
        .should('contain', 'savor')
      .get('header')
        .should('contain', 'My Recipes')
      .get('header')
        .should('contain', 'search')
      .get('.submit-btn')
  })

  it('As a user, I should be able to navigate back to the homepage by clicking on the app name in the header', () => {
    cy.get('.search-bar')
    .click()
    .type('carrot limeade')
      .get('.submit-btn')
      .click()
    cy.get('h1 > a')
      .click()
      .url()
        .should('contain', '/')
      .get('.search-bar')
      .get('header')
        .should('contain', 'savor')
      .get('header')
        .should('contain', 'My Recipes')
      .get('header')
        .should('contain', 'search')
      .get('.submit-btn')
  })

});