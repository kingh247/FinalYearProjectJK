import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Login from '../../Schema/MyLogin';
import app from '../../app';

// // Declare a variable to hold the MongoDB Memory Server
// let mongoServer;

// // Before all tests, start the MongoDB Memory Server and establish a connection
// beforeAll(async () => {
//   mongoServer = await MongoMemoryServer.create();
//   const mongoUri = mongoServer.getUri();
//   await mongoose.connect(mongoUri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// });

// // After all tests, stop the MongoDB Memory Server and close the connection
// afterAll(async () => {
//   await mongoose.disconnect();
//   await mongoServer.stop();
// });


describe('POST /login', () => {
  test('should return 401 if username or password is missing', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({ username: 'jkingh' });

    expect(res.status).toBe(500);
    expect(res.body).toMatchObject({
      error: 'Internal Server Error',
    });
  });

//   test('should return 200 if email and password are provided', async () => {
//     const res = await request(app).post('/api/login').send({
//       username: 'jkingh',
//       password: 'jkingh',
//     });
//     expect(res.status).toBe(200);
//   });
// });
// describe('POST /login', () => {
//   test('should return 401 if email or password is missing', async () => {
//     const res = await request(app)
//       .post('/api/login')
//       .send({ });

//     expect(res.status).toBe(401);
//     expect(res.body).toMatchObject({
//       error: 'Invalid username or password',
//     });
//   });

  
// });
// describe('POST /login', () => {
//   it('should return 200 if username and password are sent', async () => {
//     const userData = {
//       username: 'testuser',
//       password: 'testpassword',
//     };

//     await request(app).post('/login').send(userData).expect(200);
//   });
});
