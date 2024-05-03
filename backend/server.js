import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/database.js';
import cors from 'cors';
import path from 'path';
const port = process.env.PORT || 5000;
// connect to database
connectDB();
import app from './app.js'; // calling the api functions from app.js to keep server tidy
// to use paypal
app.use('/api/config/paypal', (req, res) => {
  res.send({ clientID: process.env.PAYPAL_CLIENT_ID });
});
// const __dirname = path.dirname('');
// // Set static folder to serve frontend build files
// const buildPath = path.join(__dirname, '../frontend/build');
// app.use(express.static(buildPath));

// // Serve React app's index.html for all routes
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
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

// app.get('/', (req, res) => {
//   res.send('Hello, welcome to the server!');
// });

// // Middleware to connect to front end
app.use(express.json());
app.use(cors());
app.listen(port, () => console.log(`Server is now running on ${port}`));

// import express from 'express';
// import dotenv from 'dotenv';
// dotenv.config();
// import connectDB from './config/database.js';
// import cors from 'cors';
// import path from 'path';
// import productRoute from './routes/productRoutes.js';
// import userRoute from './routes/user.js';
// import shippingRoute from './routes/shippingRoute.js';
// import productsRoute from './routes/productsRoute.js';
// import orderRoute from './routes/orderRoute.js';
// import signUpRoute from './routes/signUpRoute.js';
// import loginRoute from './routes/loginRoute.js';

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

// // Mount the Router
// app.use('/api/product', productRoute);

// app.use('/api/users', userRoute);

// app.use('/api/shipping', shippingRoute);

// app.use('/api/products', productsRoute);

// app.use('/api/order', orderRoute);

// app.use('/api/signup', signUpRoute);

// app.use('/api/login', loginRoute);

// app.listen(port, () => console.log(`Server is now running on ${port}`));
