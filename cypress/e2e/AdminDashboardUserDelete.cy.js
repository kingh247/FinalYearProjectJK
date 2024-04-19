describe('Test', () => {
  it('should login as ADmin', () => {
    // shoud login as ADmin and add a product
    cy.visit('http://localhost:3000/login');
    cy.findByRole('textbox', { username: /username:/i }).type('jkingh');
    cy.findByLabelText(/password:/i).type('jkingh');
    cy.findByRole('button', { password: /login/i }).click();
    //clcik on user edituser
    cy.findByRole('button', { name: /view user list/i }).click();
    // Find and click delete button for the specific user
    // add a different user to delete
    cy.findByRole('row', {
      name: /660eba06220616566316d36a adminusejk admin@email2k\.com admin edit delete/i,
    }).within(() => {
      cy.findByRole('button', { name: /delete/i }).click();
    });
  });
});
