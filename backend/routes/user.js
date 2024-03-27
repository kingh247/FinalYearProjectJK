import express from 'express';
const router = express.Router();
import User from '../Schema/MyUser.js';
import Users from '../Schema/MyLogin.js';

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      res.json(user);
    } else {
      console.log('User not found');
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.log('Internal Server Error');
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Delete user by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (deletedUser) {
      console.log('User deleted successfully');

      res.json({ message: 'User deleted successfully', deletedUser });
    } else {
      console.log('User not found');

      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.log('Error deleting user:');

    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// insert users to database using post
router.post('/', async (req, res) => {
  try {
    // Check if required fields are present in the request body
    const requiredFields = ['username', 'password']; // Adjust as per your schema
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res
          .status(400)
          .json({ message: `Missing required field: ${field}` });
      }
    }
    // Check if the user already exists
    const { username } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log('User already exists');
      return res.status(400).json({ message: 'User already exists' });
    }
    // create the user
    User.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
  console.log(req.body);

  //res.send(req.body);
});
// Update user by ID by using the Users schema
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await Users.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Returns the modified document rather than the original
    );

    if (updatedUser) {
      res.json({ message: 'User updated successfully', updatedUser });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const data = await User.find();

    // Check if there is any data returned
    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'No users found.' });
    }

    res.json(data);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
