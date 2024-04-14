describe('Test', () => {
  it('should post shipping', () => {
    const requestBody = {
      username: Math.random().toString(36).substring(2, 15),
      password: Math.random().toString(36).substring(2, 15),
      email: Math.random().toString(36).substring(2, 15) + 'admin@email2k.com',
      userType: 'Admin',
    };
    cy.request({
      method: 'POST',
      url: 'http://localhost:5000/api/signup',
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Signup successful');
    });
  });
  it('should  not post shipping, same username', () => {
    const requestBody = {
      username: 'Admin',
      password: Math.random().toString(36).substring(2, 15),
      email: Math.random().toString(36).substring(2, 15) + 'admin@email2k.com',
      userType: 'Admin',
    };
    cy.request({
      method: 'POST',
      url: 'http://localhost:5000/api/signup',
      body: requestBody,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq('Username is already in use');
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
      url: 'http://localhost:5000/api/signup',
      body: requestBody,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq('Username is required');
    });
  });
});
