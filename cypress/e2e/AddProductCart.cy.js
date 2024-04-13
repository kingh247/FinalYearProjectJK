describe('Test', () => {
  it('should login as ADmin', () => {
    // should add prodcut to cart
    cy.visit('http://localhost:3000/');
    cy.findByText(
      /lap 13a 2\-gang sp switched socket \+ 4\.2a 15w 2\-outlet type a & c usb charger black nickel with black inserts/i
    ).click();
    cy.findByRole('button', { name: /add to cart/i }).click();
    // should add increase the amount and update total
    cy.findByRole('combobox');
    cy.findByRole('button', { name: /proceed to checkout/i }).click();
    // should ask the user to login
    cy.findByRole('textbox', { username: /username:/i }).type('ted');
    cy.findByLabelText(/password:/i).type('ted');
    cy.findByRole('button', { password: /login/i }).click();
    // should click on the cart icon
    cy.findByRole('link', { name: /cart 1/i }).click();
    // procced to checkout

    cy.findByRole('button', { name: /proceed to checkout/i }).click();
    // continue to payment screen
    cy.findByRole('button', { name: /continue to payment/i }).click();
    //click pay and continue
    cy.findByRole('button', { name: /pay and continue/i }).click();
  });
});
