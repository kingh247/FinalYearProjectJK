import express from 'express';
const router = express.Router();
import Shipping from '../Schema/Shipping.js';

// get shipping
router.get('/', async (req, res) => {
  try {
    const data = await Shipping.find();

    // Check if there is any data returned
    if (!data || data.length === 0) {
      console.log('No shipping data found.');
      return res.status(404).json({ message: 'No shipping data found.' });
    }

    res.json(data);
  } catch (error) {
    console.error('Error fetching shipping data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// get shipping id from mongo database, passing in the User mongoose schema
router.get('/:id', async (req, res) => {
  try {
    const shipping = await Shipping.findById(req.params.id);

    if (shipping) {
      res.json(shipping);
    } else {
      console.log('shipping not found');
      res.status(404).json({ error: 'shipping not found' });
    }
  } catch (error) {
    console.log('Internal Server Error');
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

 // insert shiipppinga address to database using post
router.post('/', async (req, res) => {
 
  try {
    const { fullName, addressLine1, addressLine2, postalCode, city, country } =
      req.body;

    const missingFields = [];

    // Check if any required field is missing
    if (!fullName) {
      missingFields.push('Full Name');
    }
    if (!addressLine1) {
      missingFields.push('AddressLine1');
    }
    if (!addressLine2) {
      missingFields.push('AddressLine2');
    }
    if (!city) {
      missingFields.push('City');
    }
    if (!postalCode) {
      missingFields.push('Postal code');
    }
    if (!country) {
      missingFields.push('Country');
    }

    // If there are missing fields, return error response
    if (missingFields.length > 0) {
      const errorMessage = `Missing fields: ${missingFields.join(', ')}`;
      console.log(errorMessage);
      return res.status(400).json({ message: errorMessage });
    }

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
      console.error('Shipping not found', error);
      res.status(404).json({ error: 'Shipping not found' });
    }
  } catch (error) {
    console.error('Internal Server Error', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Delete Shipping by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedShipping = await Shipping.findByIdAndDelete(req.params.id);
    if (deletedShipping) {
      console.log('Shipping deleted successfully');
      res.json({ message: 'Shipping deleted successfully', deletedShipping });
    } else {
      console.log('Shipping not found');
      res.status(404).json({ error: 'Shipping not found' });
    }
  } catch (error) {
    console.log('Internal Server Error');
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
