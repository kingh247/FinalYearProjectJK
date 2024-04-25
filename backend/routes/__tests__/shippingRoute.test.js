import request from 'supertest';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import Shipping from '../../Schema/Shipping';
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

describe('POST /shipping', () => {
  test('should return 400 no data sent', async () => {
    const res = await request(app).post('/api/shipping').send({});

    expect(res.status).toBe(400);
    expect(res.body).toMatchObject({
      message:
        'Missing fields: Full Name, AddressLine1, AddressLine2, City, Postal code, Country',
    });
  });
  test('should create a new shipping record', async () => {
    const newShippingData = {
      fullName: 'John Doe',
      addressLine1: '123 Main St',
      addressLine2: 'Apt 101',
      city: 'New York',
      postalCode: '10001',
      country: 'USA',
    };

    const res = await request(app).post('/api/shipping').send(newShippingData);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.fullName).toBe(newShippingData.fullName);
    expect(res.body.addressLine1).toBe(newShippingData.addressLine1);
    expect(res.body.addressLine2).toBe(newShippingData.addressLine2);
    expect(res.body.city).toBe(newShippingData.city);
    expect(res.body.postalCode).toBe(newShippingData.postalCode);
    expect(res.body.country).toBe(newShippingData.country);

    // Optionally, you can check if the shipping record is actually stored in the database
    const savedShipping = await Shipping.findOne({
      fullName: newShippingData.fullName,
    });
    expect(savedShipping).toBeTruthy();
  });

  test('should create a new shipping record', async () => {
    const newShippingData = {
      addressLine1: '123 Main St',
      addressLine2: 'Apt 101',
      city: 'New York',
      postalCode: '10001',
      country: 'USA',
    };

    const res = await request(app).post('/api/shipping').send(newShippingData);

    expect(res.status).toBe(400);
    expect(res.body).toMatchObject({
      message: 'Missing fields: Full Name',
    });
  });
});
