describe('Test', () => {
  it('should login as ADmin', () => {
    // shoud login as ADmin and add a product
    cy.visit('http://localhost:3000/login');
    cy.findByRole('textbox', { username: /username:/i }).type('jkingh');
    cy.findByLabelText(/password:/i).type('jkingh');
    cy.findByRole('button', { password: /login/i }).click();
    //clcik on user edit
    cy.findByRole('button', { name: /view product list/i }).click();
    // click edit  change back to john kingh

    const row = cy.findByRole('row', {
      name: /65f44c15440e962365e34863 updated john kingh 23 2 breaskfast edit delete/i,
    });

    row.findByRole('button', { name: /edit/i }).click();
    // // edit user product

    cy.findByRole('textbox', { name: /name/i }).type('1');

    // // update product
    cy.findByRole('button', { name: /update product/i }).click();
  });
});
