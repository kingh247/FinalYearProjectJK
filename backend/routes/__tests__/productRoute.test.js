// import request from 'supertest';
// import mongoose from 'mongoose';
// import { MongoMemoryServer } from 'mongodb-memory-server';
// import Product from '../../Schema/Product';
// import app from '../../app';

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

// describe('should reurn 200 when product are fetched', () => {
//   test(' retrurn 200 status code', async () => {
//     const res = await request(app).get('/api/products').send();

//     expect(res.status).toBe(200);
//   });
// });
import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Product from '../../Schema/Product';
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

// describe('GET /api/product', () => {
//   test('should return 200 status code', async () => {
//     const res = await request(app).get('/api/product').send();

//     expect(res.status).toBe(200);
//   });
// });

describe('POST /api/product', () => {
  test('should add a new product and return 200 status code', async () => {
    const productData = {
      MyName: 'test Laptop23rrty',
      MyImage: '/images/laptop.jpg',
      MyDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      MyBrand: 'Dell',
      MyCategory: 'Add your category',
      MyPrice: 15.0,
      MyCountInStock: 11,
      MyRating: 4.0,
      MyNumReviews: 5,
    };

    const res = await request(app).post('/api/product').send(productData);

    expect(res.status).toBe(200);
    // Optionally, you can also expect the response body to contain the added product data
    // expect(res.body).toEqual(expect.objectContaining(productData));
  });
});
describe('POST /api/product', () => {
  test('should add a new product and return 200 status code', async () => {
    const productData = {
      MyImage: '/images/laptop.jpg',
      MyDescription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      MyBrand: 'Dell',
      MyCategory: 'Add your category',
      MyPrice: 15.0,
      MyCountInStock: 11,
      MyRating: 4.0,
      MyNumReviews: 5,
    };

    const res = await request(app).post('/api/product').send(productData);

    expect(res.status).toBe(400);
    expect(res.body).toMatchObject({
      message: 'Name is required',
    });
    // Optionally, you can also expect the response body to contain the added product data
    // expect(res.body).toEqual(expect.objectContaining(productData));
  });
});
