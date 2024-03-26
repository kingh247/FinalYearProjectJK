import express from 'express';
const router = express.Router();
import Order from '../Schema/MyOrder.js';

// sending order
router.post('/', async (req, res) => {
  try {
    // Check if request body is empty
    if (!req.body) {
      return res.status(400).json({ message: 'Request body is empty' });
    }

    const order = await Order.create(req.body);
    res.status(200).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});





export default router;