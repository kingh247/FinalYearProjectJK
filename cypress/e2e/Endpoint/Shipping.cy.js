describe('Test', () => {
  it('should post shipping', () => {
    const requestBody = {
      fullName: 'John kingh',
      addressLine1: '3 Ballo Road',
      addressLine2: 'Springtown',
      city: 'Derry',
      postalCode: 'BT82 9KL ',
      country: 'Northern Ireland',
    };
    cy.request({
      method: 'POST',
      url: 'http://localhost:5000/api/shipping',
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.fullName).to.eq('John kingh');
      expect(response.body.addressLine1).to.eq('3 Ballo Road');
      expect(response.body.addressLine2).to.eq('Springtown');
      expect(response.body.city).to.eq('Derry');
      expect(response.body.postalCode).to.eq('BT82 9KL ');
      expect(response.body.country).to.eq('Northern Ireland');
    });
  });

  it('should not post missing field', () => {
    const requestBody = {
      addressLine1: '3 Ballo Road',
      addressLine2: 'Springtown',
      city: 'Derry',
      postalCode: 'BT82 9KL ',
      country: 'Northern Ireland',
    };
    cy.request({
      method: 'POST',
      url: 'http://localhost:5000/api/shipping',
      body: requestBody,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq('Missing fields: Full Name');
      // expect(response.body.message).to.eq('Missing required field: password');
    });
  });
});
