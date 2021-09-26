describe('Recipe search user flows', () => {

  it('As a user, I should be able to visit http://localhost:3000 and see the app name and recipe search bar', () => {
    cy.visit('http://localhost:3000')
      .contains('savor')
      .get('form')
        .get('.search-bar')
        .get('button')
  })

  it('As a user, I should be able to type a search query into the searchbar, and see a list of matches', () => {
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
      .get('.search-bar')
        .click()
        .type('carrot limeade')
          .get('.submit-btn')
          .click()
            .url()
            .should('include', '/recipes')
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
    })

});