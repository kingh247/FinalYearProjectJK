describe('Test', () => {
  it('should login as User', () => {
    // shoud login User and add a new product
    cy.visit('http://localhost:3000/login');
    cy.findByRole('textbox', { username: /username:/i }).type('ted');
    cy.findByLabelText(/password:/i).type('ted');
    cy.findByRole('button', { password: /login/i }).click();
  });
});
