describe('Test', () => {
  it('should post proudcts', () => {
    const requestBody = {
      MyName: Math.random().toString(36).substring(2, 15),
      MyImage: '/images/laptop.jpg',
      MyDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam',
      MyBrand: Math.random().toString(36).substring(2, 15),
      MyCategory: Math.random().toString(36).substring(2, 15),
      MyPrice: '22',
    };
    cy.request({
      method: 'POST',
      url: 'http://localhost:5000/api/product',
      body: requestBody,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.MyName).to.eq(requestBody.MyName);
      expect(response.body.MyImage).to.eq('/images/laptop.jpg');
      expect(response.body.MyDescription).to.eq(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam'
      );
      expect(response.body.MyBrand).to.eq(requestBody.MyBrand);
      expect(response.body.MyCategory).to.eq(requestBody.MyCategory);
      expect(response.body.MyPrice).to.eq(22);
    });
  });

  it('should not post missing field', () => {
    const requestBody = {
      MyDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam',
      MyBrand: Math.random().toString(36).substring(2, 15),
      MyCategory: Math.random().toString(36).substring(2, 15),
      MyPrice: Math.random().toString(36).substring(2, 15),
      MyCountInStock: Math.random().toString(36).substring(1),
      MyRating: Math.random().toString(36).substring(1),
      MyNumReviews: Math.random().toString(36).substring(1),
    };
    cy.request({
      method: 'POST',
      url: 'http://localhost:5000/api/product',
      body: requestBody,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      // expect(response.body.message).to.eq('Missing required field: password');
    });
  });
});
