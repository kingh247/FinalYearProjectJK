import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';
import User from '../Schema/MyUser.js';


// Define your JWT secret here
const JWT_SECRET = '12345';

 router.post('/', async (req, res) => {
   try {
     const { username, password } = req.body;
     // Check if the username exists in the database
     const user = await User.findOne({ username });
     const passwordMatch = await bcrypt.compare(password, user.password);
     console.log(passwordMatch); // returns true of false depending if the password is correct
     if (passwordMatch) {
       // Generate JWT token
       const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
         expiresIn: '1d',
       });
       // Send token and user data in response
       res.cookie('jwt', token, {
         maxAge: 1000 * 60 * 60 * 24,
         httpOnly: true,
         secure: false,
         sameSite: 'strict',
       });

       res.json({
         _id: user._id,
         username: user.username,
         userType: user.userType,
         token, // Include token in response if needed
       });
     } else {
       res.status(401).json({ error: 'Invalid credentials' });
       // You can log this error if needed
       // console.error('Invalid credentials');
     }
   } catch (error) {
     console.error('Error:', error);
     res.status(500).json({ error: 'Internal Server Error' });
   }
 });


export default router;