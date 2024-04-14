describe('Test', () => {
  it('should post users', () => {
    const requestBody = {
      username: Math.random().toString(36).substring(2, 15),
      password: Math.random().toString(36).substring(2, 15) + 'gmail.com',
    };
    cy.request({
      method: 'POST',
      url: 'http://localhost:5000/api/users',
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.username).to.eq(requestBody.username);
      expect(response.body.password).to.eq(requestBody.password);
    });
  });

  it('should post users missing field', () => {
    const requestBody = {
      username: Math.random().toString(36).substring(2, 15),
    };
    cy.request({
      method: 'POST',
      url: 'http://localhost:5000/api/users',
      body: requestBody,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq('Missing required field: password');
    });
  });
  it('post no  field', () => {
    const requestBody = {};
    cy.request({
      method: 'POST',
      url: 'http://localhost:5000/api/users',
      body: requestBody,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });
});
