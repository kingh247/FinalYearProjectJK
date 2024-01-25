import request from 'supertest';
import app from './app'; // Import app
import User from './Schema/MyUser'; // Import User model

describe('DELETE /api/users/:id', () => {
  test('responds with 404 if user not found', async () => {
    const id = '1234';

    // Mock findByIdAndDelete to return null
    jest.spyOn(User, 'findByIdAndDelete').mockResolvedValueOnce(null);

    await request(app).delete(`/api/users/${id}`).expect(404);
  });

  test('responds with 200 if user is deleted', async () => {
    const id = '1234';
    const mockUser = { _id: id };

    // Mock findByIdAndDelete to return a user
    jest.spyOn(User, 'findByIdAndDelete').mockResolvedValueOnce(mockUser);

    await request(app).delete(`/api/users/${id}`).expect(200);
  });
});
