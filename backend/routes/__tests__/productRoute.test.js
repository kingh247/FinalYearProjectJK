import request from 'supertest';
import app from '../../app';

describe('should reurn 200 when product are fetched', () => {
  test(' retrurn 200 status code', async () => {
    const res = await request(app).get('/api/products').send();

    expect(res.status).toBe(200);
  });
});
