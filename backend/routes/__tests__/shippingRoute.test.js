import request from 'supertest';
import app from '../../app';

describe('POST /shipping', () => {
  test('should return 400 no data sent', async () => {
    const res = await request(app).post('/api/shipping').send({});

    expect(res.status).toBe(400);
    //     expect(res.body).toHaveProperty('_id');
    expect(res.body).toMatchObject({
      message:
        'Missing fields: Full Name, AddressLine1, AddressLine2, City, Postal code, Country',
    });

    //     expect(res.body).toHaveProperty('price', 10);
    // //     const shippings = await Shipping.find();
    // //     expect(shippings.length).toBe(1);
    // //     expect(shippings[0].name).toBe('Test Shipping');
    // //     expect(shippings[0].price).toBe(10);
  });
});
