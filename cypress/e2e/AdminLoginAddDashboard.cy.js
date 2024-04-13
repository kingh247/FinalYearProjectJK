describe('Test', () => {
  it('should login as ADminDashboard', () => {
    // shoud login as ADmin and add a product
    cy.visit('http://localhost:3000/login');
    cy.findByRole('textbox', { username: /username:/i }).type('jkingh');
    cy.findByLabelText(/password:/i).type('jkingh');
    cy.findByRole('button', { password: /login/i }).click();
    cy.findByRole('button', { name: /manage products/i }).click();
    cy.findByRole('textbox', { name: /product name:/i }).type('plug');
    cy.findByRole('textbox', { name: /product brand:/i }).type('plug');
    cy.findByRole('textbox', { name: /product category:/i }).type('plug');
    cy.findByRole('textbox', { name: /product description:/i }).type('plug');
    cy.findByRole('spinbutton', { name: /product rating:/i }).type('1');
    cy.findByRole('spinbutton', { name: /number of reviews:/i }).type('11');
    cy.findByRole('spinbutton', { name: /product price:/i }).type('11');
    cy.findByRole('spinbutton', { name: /product count:/i }).type('1g');
    cy.findByRole('button', { name: /add product/i }).click();
    cy.findByRole('button', { name: /back to admin panel/i }).click();
  });
});
