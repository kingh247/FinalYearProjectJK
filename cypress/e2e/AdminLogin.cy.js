describe('Test', () => {
  it('should login as ADmin', () => {
    // shoud login as ADmin and add a product
    cy.visit('http://localhost:3000/login');
    cy.findByRole('textbox', { username: /username:/i }).type('jkingh');
    cy.findByLabelText(/password:/i).type('jkingh');
    cy.findByRole('button', { password: /login/i }).click();
  });
});
