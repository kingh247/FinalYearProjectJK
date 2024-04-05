import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/database.js';
import cors from 'cors';
import path from 'path';
import productRoute from './routes/productRoutes.js';
import userRoute from './routes/user.js';
import shippingRoute from './routes/shippingRoute.js';
import productsRoute from './routes/productsRoute.js';
import orderRoute from './routes/orderRoute.js';
import signUpRoute from './routes/signUpRoute.js';
import loginRoute from './routes/loginRoute.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
// connect to database
connectDB(); // used for the testing comment out when not using it
const app = express();

// Swagger options
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Eccomere B2B project',
      version: '1.0.0',
      description: 'API documentation generated with Swagger',
      contact: {
        name: 'John kingh',
      },
      server: ['https://localhost:5000'],
    },
  },
  apis: ['./app.js'], // Path to the API routes file(s)
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// app.get('/', (req, res) => {
//   res.send('Hello, welcome to the server!');
// });
// to use paypal
app.use('/api/config/paypal', (req, res) => {
  res.send({ clientID: process.env.PAYPAL_CLIENT_ID });
});
// for render to
const __dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static(path.join(__dirname, '/frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('Hello, welcome to the server!');
  });
}

// // Middleware to connect to front end
app.use(express.json());
app.use(cors());
// Mount the Router
// app.use('/api/product', productRoute);
// app.use('/api/users', userRoute);
// app.use('/api/shipping', shippingRoute);
// app.use('/api/products', productsRoute);
// app.use('/api/order', orderRoute);
// app.use('/api/signup', signUpRoute);
// app.use('/api/login', loginRoute);

// below is used to add swagger docs and testing the endpout routes..

//..... http://localhost:5000/api-docs/#/ ......
/**
 /**
 * @swagger
 * /api/product:
 *   post:
 *     summary: Create new product
 *     description: Create new product with provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               MyName:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product created successfully.
 *       400:
 *         description: Bad request, missing required fields or product with the same name already exists.
 *       500:
 *         description: Internal server error.
 */
/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Retrieve all products
 *     description: Retrieve a list of all products.
 *     responses:
 *       200:
 *         description: A list of products.
 *       404:
 *         description: No products found.
 *       500:
 *         description: Internal server error.
 */
/**
 * @swagger
 * /api/product:
 *   delete:
 *     summary: Delete product by ID
 *     description: Delete product data by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product data deleted successfully.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal server error.
 */
/**
 * @swagger
 * /api/product:
 *   put:
 *     summary: Update product by ID
 *     description: Update product data by its ID with provided details.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               MyName:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product updated successfully.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal server error.
 */
/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     summary: Retrieve a product by ID
 *     description: Retrieve a single product by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested product.
 *       404:
 *         description: Product not found.
 *       500:
 *         description: Internal server error.
 */

app.use('/api/product', productRoute);

/**
 * @swagger
 * /api/users:
 *   name: Products
 *   get:
 *     summary: Retrieve all users
 *     description: Retrieve a list of all users.
 *     responses:
 *       200:
 *         description: A list of users.
 *       404:
 *         description: No users found.
 *       500:
 *         description: Internal server error.
 */
/**
 * @swagger
 * /api/users:
 *   name: Products
 *   delete:
 *     summary: Delete user by ID
 *     description: Delete user data by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User data deleted successfully.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Internal server error.
 */
/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Retrieve a users by ID
 *     description: Retrieve a single users by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the users to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested users.
 *       404:
 *         description: users not found.
 */
/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Retrieve a users by ID
 *     description: Retrieve a single users by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the users to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The requested users.
 *       404:
 *         description: users not found.
 */
/**
 * @swagger
 * /api/users/{id}:
 *   post:
 *     summary: Create new user
 *     description: Create new user with provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User created successfully.
 *       400:
 *         description: Bad request, missing required fields.
 *       500:
 *         description: Internal server error.
 */
/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update user by ID
 *     description: Update user data by its ID with provided details.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Internal server error.
 */
app.use('/api/users', userRoute);

/**
 * @swagger
 * /api/shipping:
 *   name: Shipping
 *   get:
 *     summary: Retrieve all shipping details
 *     description: Retrieve a list of all shipping details.
 *     responses:
 *       200:
 *         description: A list of shipping details.
 */
/**
 * /**
 * @swagger
 * /api/shipping:
 *   name: Shipping
 *   post:
 *     summary: Create new shipping data
 *     description: Create new shipping data with provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               addressLine1:
 *                 type: string
 *               addressLine2:
 *                 type: string
 *               postalCode:
 *                 type: string
 *               city:
 *                 type: string
 *               country:
 *                 type: string
 *     responses:
 *       200:
 *         description: Shipping data created successfully.
 *       400:
 *         description: Bad request, missing required fields.
 *       500:
 *         description: Internal server error.
 */
/**
 * /**
 * @swagger
 * /api/shipping/{id}:
 *   name: Shipping
 *   get:
 *     summary: Get shipping data by ID
 *     description: Retrieve shipping data by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the shipping data to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Shipping data retrieved successfully.
 *       404:
 *         description: Shipping data not found.
 *       500:
 *         description: Internal server error.
 */
/**
 * /**
 * @swagger
 * /api/shipping:
 *   name: Shipping
 *   put:
 *     summary: Update shipping data by ID
 *     description: Update shipping data by its ID with provided details.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the shipping data to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *               addressLine1:
 *                 type: string
 *               addressLine2:
 *                 type: string
 *               postalCode:
 *                 type: string
 *               city:
 *                 type: string
 *               country:
 *                 type: string
 *     responses:
 *       200:
 *         description: Shipping data updated successfully.
 *       404:
 *         description: Shipping data not found.
 *       500:
 *         description: Internal server error.
 *   delete:
 *     summary: Delete shipping data by ID
 *     description: Delete shipping data by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the shipping data to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Shipping data deleted successfully.
 *       404:
 *         description: Shipping data not found.
 *       500:
 *         description: Internal server error.
 */
/**
 * @swagger
 * /api/shipping:
 *   name: Shipping
 *   delete:
 *     summary: Delete shipping data by ID
 *     description: Delete shipping data by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the shipping data to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Shipping data deleted successfully.
 *       404:
 *         description: Shipping data not found.
 *       500:
 *         description: Internal server error.
 */
app.use('/api/shipping', shippingRoute);

/**
 * @swagger
 * /api/products:
 *   name: Products
 *   get:
 *     summary: Retrieve all products
 *     description: Retrieve a list of all products.
 *     responses:
 *       200:
 *         description: A list of products.
 */

app.use('/api/products', productsRoute);
/**
 * @swagger
 * /api/order:
 *   name: Order
 *   get:
 *     summary: Retrieve all orders
 *     description: Retrieve a list of all orders.
 *     responses:
 *       200:
 *         description: A list of orders.
 */

app.use('/api/order', orderRoute);
/**
 * @swagger
 * /api/signup:
 *   name: Signup
 *   get:
 *     summary: Retrieve all signups
 *     description: Retrieve a list of all signups.
 responses:
 *       200:
 *         description: A list of signups.
 *       404:
 *         description: No signups found.
 *       500:
 *         description: Internal server error.
 */
/**
 * @swagger
 * /api/signup:
 *   post:
 *     summary: Signup user
 *     description: Register a new user with username, email, password, and user type.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               userType:
 *                 type: string
 *     responses:
 *       201:
 *         description: Signup successful.
 *       400:
 *         description: Bad request, missing required fields or username/email already in use.
 *       500:
 *         description: Internal server error.
 */

app.use('/api/signup', signUpRoute);

/**
 * @swagger
 * /api/login:
 *   name: Login
 *   get:
 *     summary: Retrieve all logins
 *     description: Retrieve a list of all logins.
 *     responses:
 *       200:
 *         description: A list of logins.
 *       404:
 *         description: No signups found.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Login user
 *     description: Authenticate a user and generate JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User authenticated successfully.
 *       401:
 *         description: Invalid credentials.
 *       500:
 *         description: Internal Server Error.
 */

app.use('/api/login', loginRoute);
export default app;

////this is my ServerApiVersion.js code

// import express from 'express';
// import dotenv from 'dotenv';
// dotenv.config();
// import connectDB from './config/database.js';
// import cors from 'cors';
// import products from './data/products.js';
// import User from './Schema/MyUser.js';
// import Users from './Schema/MyLogin.js';
// import Product from './Schema/Product.js';
// import Shipping from './Schema/Shipping.js';
// import jwt from 'jsonwebtoken';
// import path from 'path';
// import bcrypt from 'bcrypt';

// import mongoose from 'mongoose';
// import Order from './Schema/MyOrder.js';

// const port = process.env.PORT || 5000;
// // connect to database
// connectDB();
// // intialize express
// const app = express();

// // app.get('/', (req, res) => {
// //   res.send('Hello, welcome to the server!');
// // });

// // to use paypal
// app.use('/api/config/paypal', (req, res) => {
//   res.send({ clientID: process.env.PAYPAL_CLIENT_ID });
// });

// // for render to
// const __dirname = path.resolve();
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static(path.join(__dirname, '/frontend/build')));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//   });
// } else {
//   app.get('/', (req, res) => {
//     res.send('Hello, welcome to the server!');
//   });
// }

// // // Middleware to connect to front end
// app.use(express.json());
// app.use(cors());

// // // List all products
// app.get('/api/products', (req, res) => {
//   try {
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // List one product by placeholder p._id from sever api
// // app.get('/api/products/:id', (req, res) => {
// //   try {
// //     const product = products.find((p) => p._id == req.params.id);
// //     if (product) {
// //       res.json(product);
// //     } else {
// //       res.status(404).json({ error: 'Product not found' });
// //     }
// //   } catch (error) {
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });

// // get product id from mongo database, passing in the Product mongoose schema
// app.get('/api/product/:id', async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404).json({ error: 'Product not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
// // get user id from mongo database, passing in the User mongoose schema
// app.get('/api/users/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);

//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
// // Delete user by ID
// app.delete('/api/users/:id', async (req, res) => {
//   try {
//     const deletedUser = await User.findByIdAndDelete(req.params.id);

//     if (deletedUser) {
//       res.json({ message: 'User deleted successfully', deletedUser });
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   } catch (error) {
//     console.error('Error deleting user:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // insert product to database using post
// // app.get('/api/product', async (req, res) => {
// //   res.json({
// //     MyName: 'Add your products name here',
// //     MyImage: '/images/me.jpg',
// //     MyDescription:
// //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam',
// //     MyBrand: 'Add your brand',
// //     MyCategory: 'Add your category ',
// //     MyPrice: 13.0,
// //     MyCountInStock: 6,
// //     MyRating: 4.0,
// //     MyNumReviews: 5,
// //   });
// // });
// // // insert product to database using post
// // app.post('/api/product', async (req, res) => {
// //   const data = req.body;
// //   const result = await User.insertOne(data); // pass the data parameter

// //   res.send(result);
// // });

// // // insert user to database using post
// // app.post('/api/user', async (req, res) => {
// //   const data = req.body;
// //   const result = await eccomerce.insertOne(data); // pass the data parameter

// //   res.send(result);
// // });

// // insert product to database using post
// app.post('/api/product', async (req, res) => {
//   // insert product to database using post
//   try {
//     const product = await Product.create(req.body);
//     res.status(200).json(product);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
//   console.log(req.body);

//   // res.send(req.body);
// });
// // sending order
// app.post('/api/order', async (req, res) => {
//   try {
//     // Check if request body is empty
//     if (!req.body) {
//       return res.status(400).json({ message: 'Request body is empty' });
//     }

//     const order = await Order.create(req.body);
//     res.status(200).json(order);
//   } catch (error) {
//     console.error('Error creating order:', error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// // app.post('/api/order', async (req, res) => {
// //   // insert product to database using post
// //   try {
// //     const order = await Order.create(req.body);
// //     res.status(200).json(order);
// //   } catch (error) {
// //     console.log(error.message);
// //     res.status(500).json({ message: error.message });
// //   }
// //   console.log(req.body);

// // res.send(req.body);
// // });
// // Route to create a new order
// // shipping
// app.post('/api/shipping', async (req, res) => {
//   // insert product to database using post
//   try {
//     const shipping = await Shipping.create(req.body);
//     res.status(200).json(shipping);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
//   console.log(req.body);

//   // res.send(req.body);
// });

// // Delete product by ID
// app.delete('/api/product/:id', async (req, res) => {
//   try {
//     const deletedProduct = await Product.findByIdAndDelete(req.params.id);
//     if (deletedProduct) {
//       res.json({ message: 'Product deleted successfully', deletedProduct });
//     } else {
//       res.status(404).json({ error: 'Product not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Update product by ID
// // Update product by ID
// app.put('/api/product/:id', async (req, res) => {
//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true } // Returns the modified document rather than the original
//     );

//     // Check if the product was found and updated
//     if (updatedProduct) {
//       res.json({ message: 'Product updated successfully', updatedProduct });
//     } else {
//       // If product is not found
//       res.status(404).json({ error: 'Product not found' });
//     }
//   } catch (error) {
//     // Catch any errors that occur during the update process
//     console.error('Error updating product:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
// // app.put('/api/product/:id', async (req, res) => {
// //   try {
// //     const updatedProduct = await Product.findByIdAndUpdate(
// //       req.params.id,
// //       req.body,
// //       { new: true } // Returns the modified document rather than the original
// //     );

// //     if (updatedProduct) {
// //       res.json({ message: 'Product updated successfully', updatedProduct });
// //     } else {
// //       res.status(404).json({ error: 'Product not found' });
// //     }
// //   } catch (error) {
// //     console.error('Error updating product:', error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // });

// // insert users to database using post
// app.post('/api/users', async (req, res) => {
//   try {
//     // Check if required fields are present in the request body
//     const requiredFields = ['username', 'password']; // Adjust as per your schema
//     for (const field of requiredFields) {
//       if (!req.body[field]) {
//         return res
//           .status(400)
//           .json({ message: `Missing required field: ${field}` });
//       }
//     }
//     User.create(req.body)
//       .then((users) => res.json(users))
//       .catch((err) => res.json(err));
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({ message: error.message });
//   }
//   console.log(req.body);

//   //res.send(req.body);
// });
// // Update user by ID by using the Users schema
// app.put('/api/users/:id', async (req, res) => {
//   try {
//     const updatedUser = await Users.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true } // Returns the modified document rather than the original
//     );

//     if (updatedUser) {
//       res.json({ message: 'User updated successfully', updatedUser });
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   } catch (error) {
//     console.error('Error updating user:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // get user
// // app.get('/api/users', async (req, res) => {
// //   const data = await User.find();

// //   res.json(data);
// // });
// // // get signup
// // app.get('/api/signup', async (req, res) => {
// //   const data = await Users.find();

// //   res.json(data);
// // });
// // // get Products
// // app.get('/api/product', async (req, res) => {
// //   const data = await Product.find();

// //   res.json(data);
// // });
// // Get users
// app.get('/api/users', async (req, res) => {
//   try {
//     const data = await User.find();

//     // Check if there is any data returned
//     if (!data || data.length === 0) {
//       return res.status(404).json({ message: 'No users found.' });
//     }

//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Get signups
// app.get('/api/signup', async (req, res) => {
//   try {
//     const data = await Users.find();

//     // Check if there is any data returned
//     if (!data || data.length === 0) {
//       return res.status(404).json({ message: 'No signups found.' });
//     }

//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching signups:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Get products
// app.get('/api/product', async (req, res) => {
//   try {
//     const data = await Product.find();

//     // Check if there is any data returned
//     if (!data || data.length === 0) {
//       return res.status(404).json({ message: 'No products found.' });
//     }

//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching products:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // get shipping
// app.get('/api/shipping', async (req, res) => {
//   try {
//     const data = await Shipping.find();

//     // Check if there is any data returned
//     if (!data || data.length === 0) {
//       return res.status(404).json({ message: 'No shipping data found.' });
//     }

//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching shipping data:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });
// // update Shipping by ID
// app.put('/api/shipping/:id', async (req, res) => {
//   try {
//     const updatedShipping = await Shipping.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true } // Returns the modified document rather than the original
//     );

//     if (updatedShipping) {
//       res.json({ message: 'Shipping updated successfully', updatedShipping });
//     } else {
//       res.status(404).json({ error: 'Shipping not found' });
//     }
//   } catch (error) {
//     console.error('Error updating Shipping:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
// // Delete Shipping by ID
// app.delete('/api/shipping/:id', async (req, res) => {
//   try {
//     const deletedShipping = await Shipping.findByIdAndDelete(req.params.id);
//     if (deletedShipping) {
//       res.json({ message: 'Shipping deleted successfully', deletedShipping });
//     } else {
//       res.status(404).json({ error: 'Shipping not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Define your JWT secret here
// const JWT_SECRET = '12345';

// app.post('/api/login', async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     // Check if the username exists in the database
//     const user = await User.findOne({ username });
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     console.log(passwordMatch); // returns true of false depending if the password is correct
//     if (passwordMatch) {
//       // Generate JWT token
//       const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
//         expiresIn: '1d',
//       });
//       // Send token and user data in response
//       res.cookie('jwt', token, {
//         maxAge: 1000 * 60 * 60 * 24,
//         httpOnly: true,
//         secure: false,
//         sameSite: 'strict',
//       });

//       res.json({
//         _id: user._id,
//         username: user.username,
//         userType: user.userType,
//         token, // Include token in response if needed
//       });

//       // if (user.userType === 'Admin') {
//       //   // If userType is 'Admin', redirect to admin dashboard or any other route

//       //   console.log(user);
//       // }
//     } else {
//       res.status(401).json({ error: 'Invalid credentials' });
//       // You can log this error if needed
//       // console.error('Invalid credentials');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // Signup  route using bcrypt
// app.post('/api/signup', async (req, res) => {
//   // Signup  route using bcrypt
//   const { username, email, password, userType } = req.body;
//   // Check if any required field is missing

//   if (!username || !email || !password || !userType) {
//     return res.status(400).json({ message: 'Missing required fields' });
//   }

//   bcrypt.hash(password, 10).then((hash) => {
//     Users.create({ username, email, password: hash, userType })
//       .then((user) => {
//         // Send a response indicating successful signup
//         res.status(201).json({ message: 'Signup successful' });
//       })
//       .catch((err) => {
//         res.status(500).json({ message: 'Internal server error' });
//       });
//   });
// });
// // get user id from mongo database, passing in the User mongoose schema
// app.get('/api/shipping/:id', async (req, res) => {
//   try {
//     const shipping = await Shipping.findById(req.params.id);

//     if (shipping) {
//       res.json(shipping);
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // // Manually add a user to the database
// // const hardcodedUser = new User({
// //   username: 'nnnnnn_kingh@live.co.uk',
// //   password: 'Password1234',
// // });

// // hardcodedUser
// //   .save()
// //   .then(() => {
// //     console.log('Hardcoded user added to the database');
// //   })
// //   .catch((error) => {
// //     console.error('Error adding hardcoded user to the database:', error);
// //   });

// app.listen(port, () => console.log(`Server is now running on ${port}`));
