describe('Index Page', () => {
  it('successfully loads', () => {
    cy.visit('/');

    cy.contains('Home');
  });
});
