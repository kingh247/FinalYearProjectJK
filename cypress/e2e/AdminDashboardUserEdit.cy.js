describe('Test', () => {
  it('should login as ADmin', () => {
    // shoud login as ADmin and add a product
    cy.visit('http://localhost:3000/login');
    cy.findByRole('textbox', { username: /username:/i }).type('jkingh');
    cy.findByLabelText(/password:/i).type('jkingh');
    cy.findByRole('button', { password: /login/i }).click();
    //clcik on user edit
    cy.findByRole('button', { name: /view user list/i }).click();
    // click edit  change back to john kingh
    const row = cy.findByRole('row', {
      name: /659b1c3d4d22226b7e28e1ba john kingh johnkingh@gmail admin edit delete/i,
    });
    row.findByRole('button', { name: /edit/i }).click();
    // edit user name
    cy.findByRole('textbox', { name: /username/i }).type('1');
    // update user
    cy.findByRole('button', { name: /update user/i }).click();
  });
});
