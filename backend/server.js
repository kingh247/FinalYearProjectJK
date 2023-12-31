import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/database.js';
import cors from 'cors';
import products from './data/products.js';
import User from './Schema/MyUser.js';
import Users from './Schema/MyLogin.js';
import Product from './Schema/Product.js';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const port = 5000;
// intialize express
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, welcome to the server!');
});

// // Middleware to connect to front end
app.use(express.json());
app.use(cors());
// connect to database
connectDB();

// // List all products
app.get('/api/products', (req, res) => {
  try {
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// List one product by placeholder p._id from sever api
// app.get('/api/products/:id', (req, res) => {
//   try {
//     const product = products.find((p) => p._id == req.params.id);
//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404).json({ error: 'Product not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// get product id from mongo database, passing in the Product mongoose schema
app.get('/api/product/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// get user id from mongo database, passing in the User mongoose schema
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Delete user by ID
app.delete('/api/users/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (deletedUser) {
      res.json({ message: 'User deleted successfully', deletedUser });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// insert product to database using post
// app.get('/api/product', async (req, res) => {
//   res.json({
//     MyName: 'Add your products name here',
//     MyImage: '/images/me.jpg',
//     MyDescription:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam',
//     MyBrand: 'Add your brand',
//     MyCategory: 'Add your category ',
//     MyPrice: 13.0,
//     MyCountInStock: 6,
//     MyRating: 4.0,
//     MyNumReviews: 5,
//   });
// });
// // insert product to database using post
// app.post('/api/product', async (req, res) => {
//   const data = req.body;
//   const result = await User.insertOne(data); // pass the data parameter

//   res.send(result);
// });

// // insert user to database using post
// app.post('/api/user', async (req, res) => {
//   const data = req.body;
//   const result = await eccomerce.insertOne(data); // pass the data parameter

//   res.send(result);
// });

// insert product to database using post
app.post('/api/product', async (req, res) => {
  // insert product to database using post
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
  console.log(req.body);

  // res.send(req.body);
});

// Delete product by ID
app.delete('/api/product/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (deletedProduct) {
      res.json({ message: 'Product deleted successfully', deletedProduct });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update product by ID
app.put('/api/product/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Returns the modified document rather than the original
    );

    if (updatedProduct) {
      res.json({ message: 'Product updated successfully', updatedProduct });
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// insert users to database using post
app.post('/api/users', async (req, res) => {
  try {
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
// Update user by ID
app.put('/api/users/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
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

// // insert signup to database using post without bycrpt
// app.post('/api/signup', async (req, res) => {
//   try {
//     Users.create(req.body)
//       .then((users) => res.json(users))
//       .catch((err) => res.json(err));
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
//   console.log(req.body);

//   //res.send(req.body);
// });

// get user
app.get('/api/users', async (req, res) => {
  const data = await User.find();

  res.json(data);
});
// get signup
app.get('/api/signup', async (req, res) => {
  const data = await Users.find();

  res.json(data);
});
// get Products
app.get('/api/product', async (req, res) => {
  const data = await Product.find();

  res.json(data);
});

// Login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the username exists in the database
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    res.redirect('http://localhost:3000'); // Adjust the URL as needed
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// app.post('/api/login', async (req, res) => {
//   User.create(req.body)
//     .then((users) => res.json(users))
//     .catch((err) => res.json(err));
//   console.log(req.body);
// });

// Signup  route using bcrypt
app.post('/api/signup', async (req, res) => {
  // Signup  route using bcrypt
  const { username, email, password, userType } = req.body;
  bcrypt
    .hash(password, 10) // using salt
    .then((hash) => {
      Users.create({ username, email, password: hash, userType })
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
      console.log(req.body);
    })
    .catch((err) => res.json(err.message));
});
// // Manually add a user to the database
// const hardcodedUser = new User({
//   username: 'nnnnnn_kingh@live.co.uk',
//   password: 'Password1234',
// });

// hardcodedUser
//   .save()
//   .then(() => {
//     console.log('Hardcoded user added to the database');
//   })
//   .catch((error) => {
//     console.error('Error adding hardcoded user to the database:', error);
//   });

app.listen(port, () => console.log(`Server is now running on ${port}`));
