import express from 'express';
const router = express.Router();
import products from '../data/products.js';
import handler from '../middleware/handler.js';
import Product from '../Schema/Product.js';

// List all products
router.get(
  '/',
  handler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// List one product by placeholder p._id
router.get(
  '/:id',
  handler(async (req, res) => {
    const product = await MyProduct.findById(req.params.id);
    if (product) {
      return res.json(product);
    }
    res
      .status(404)
      .json({ message: ' the product s not found in the database' });
  })
);

// // List all products
// router.get('/', (req, res) => {
//   try {
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// // List one product by placeholder p._id
// router.get('/:id', (req, res) => {
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

// // Error handling middleware for invalid routes
// router.use((req, res) => {
//   res.status(404).json({ error: 'Not Found' });
// });

// // Global error handler
// router.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Internal Server Error' });
// });

export default router;
