describe('Error handling for search input', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  }); 

  it('As a user, I should see an error message if I do not type a query before searching', () => {
    cy.get('.submit-btn')
      .click();
      cy.get('.error-display')
      .contains('You must enter a recipe query before you submit')
  });

});