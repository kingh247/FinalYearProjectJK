import express from 'express';
const router = express.Router();
import products from '../data/products.js';

// // List all products from the backend not server
router.get('/', (req, res) => {
  try {
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


export default router;