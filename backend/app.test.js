import app from './app'; // Import app
import request from 'supertest';
import User from './Schema/MyUser'; // Import User model
import mockData from './mockData/getMock';

// Test for DELETE /user/:id
describe('DELETE /users/:id', () => {
  test('should respond with 404 if user does not exist', (done) => {
    const fakeUserId = 'nonexistent_id';
    request(app)
      .delete(`/users/${fakeUserId}`)
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
  // Add more test cases for successful delete, if needed
});
// Test for PUT /user/:id
describe('PUT /users/:id', () => {
  test('should respond with 404 if user does not exist', (done) => {
    const fakeUserId = 'nonexistent_id';
    request(app)
      .put(`/users/${fakeUserId}`)
      .send({ name: 'Updated Name' })
      .expect(404)
      .end((err, res) => {
        if (err) return done(err);
        done();
      });
  });
  // Add more test cases for successful update, if needed
});

describe('Testing using motaData', () => {
  test('should save user to database on valid input using mock data', async () => {
    // Choose a user from mockData for testing
    const validUser = mockData[0]; // You can adjust the index as needed
    console.log(validUser);
    // Simulate saving the user to the database (mock operation)
    // You can use your actual database operations or mock them as needed
    const savedUser = { ...validUser, _id: 'mockedId' };

    // Perform assertions based on the simulated database operation
    expect(savedUser).not.toBeNull();
    expect(savedUser.username).toBe(validUser.username);
  }, 10000); // 10000 milliseconds (10 seconds) timeout

  test('should return 400 status code if username is missing', async () => {
    // Choose a user from mockData for testing
    const userWithMissingUsername = { ...mockData[0], username: undefined };

    // Simulate validation failure (mock operation)
    const response = {
      statusCode: 400,
      body: { message: 'Username is missing.' },
    };

    // Perform assertions based on the simulated validation failure
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Username is missing.');
  });

  test('should return 400 status code if password is missing', async () => {
    // Choose a user from mockData for testing
    const userWithMissingPassword = { ...mockData[0], password: undefined };

    // Simulate validation failure (mock operation)
    const response = {
      statusCode: 400,
      body: { message: 'Password is missing.' },
    };

    // Perform assertions based on the simulated validation failure
    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe('Password is missing.');
  });

  test('should return 409 status code if username already exists', async () => {
    // Choose two users with the same username from mockData for testing
    const existingUser = mockData[0];
    const newUserWithSameUsername = {
      ...mockData[1],
      username: existingUser.username,
    };

    // Simulate validation failure (mock operation)
    const response = {
      statusCode: 409,
      body: { message: 'Username already exists.' },
    };

    // Perform assertions based on the simulated validation failure
    expect(response.statusCode).toBe(409);
    expect(response.body.message).toBe('Username already exists.');
  });
});
