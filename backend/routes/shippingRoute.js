import express from 'express';
const router = express.Router();
import Shipping from '../Schema/Shipping.js';

// get shipping
router.get('/', async (req, res) => {
  try {
    const data = await Shipping.find();

    // Check if there is any data returned
    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'No shipping data found.' });
    }

    res.json(data);
  } catch (error) {
    console.error('Error fetching shipping data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// get user id from mongo database, passing in the User mongoose schema
router.get('/:id', async (req, res) => {
  try {
    const shipping = await Shipping.findById(req.params.id);

    if (shipping) {
      res.json(shipping);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/', async (req, res) => {
  // insert product to database using post
  try {
    const shipping = await Shipping.create(req.body);
    res.status(200).json(shipping);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
  console.log(req.body);

  // res.send(req.body);
});

// update Shipping by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedShipping = await Shipping.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Returns the modified document rather than the original
    );

    if (updatedShipping) {
      res.json({ message: 'Shipping updated successfully', updatedShipping });
    } else {
      res.status(404).json({ error: 'Shipping not found' });
    }
  } catch (error) {
    console.error('Error updating Shipping:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Delete Shipping by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedShipping = await Shipping.findByIdAndDelete(req.params.id);
    if (deletedShipping) {
      res.json({ message: 'Shipping deleted successfully', deletedShipping });
    } else {
      res.status(404).json({ error: 'Shipping not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
