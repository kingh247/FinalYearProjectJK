import express from 'express';
import User from './Schema/MyUser'; // Import User model

const app = express();

app.post('/api/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Failed to create user.' });
  }
});
// get user
app.get('/api/users', async (req, res) => {
  const data = await User.find();

  res.json(data);
});

export default app;
