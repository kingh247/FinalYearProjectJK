import request from 'supertest';
import app from '../../app';

describe('POST /signup', () => {
  test('should return 201 and create a new signup on success', async () => {
    const res = await request(app);
  });
});
// describe('POST /signup', () => {
//   test('should return 200 and create a new signup on success', async () => {
//     const res = await request(app).post('/api/signup').send({
//       username: 'testjk',
//       email: 'testjk@email.com',
//       password: 'password1231',
//       userType: 'user',
//     });
//     expect(res.statusCode).toEqual(200);
//     // const signup = await Users.findOne({ email: 'test@email.com' });
//     // expect(signup).not.toBeNull();
//     // expect(signup.username).toEqual('test');
//     // expect(signup.email).toEqual('test@email.com');
//     // expect(signup.userType).toEqual('user');
//   });
// });
describe('POST /signup', () => {
  test('should return 400 due to missing fields', async () => {
    const res = await request(app).post('/api/signup').send({
      email: 'test@email1.com',
      password: 'password1231',
      userType: 'user',
    });
    expect(res.statusCode).toEqual(400);
    // const signup = await Users.findOne({ email: 'test@email.com' });
    // expect(signup).not.toBeNull();
    // expect(signup.username).toEqual('test');
    // expect(signup.email).toEqual('test@email.com');
    // expect(signup.userType).toEqual('user');
  });
});
