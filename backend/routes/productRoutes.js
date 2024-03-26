import express from 'express';
const router = express.Router();
import Product from '../Schema/Product.js';

// Get products
router.get('/', async (req, res) => {
  try {
    const data = await Product.find();

    // Check if there is any data returned
    if (!data || data.length === 0) {
      return res.status(404).json({ message: 'No products found.' });
    }

    res.json(data);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// get product id from mongo database, passing in the Product mongoose schema
router.get('/:id', async (req, res) => {
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

// insert product to database using post
router.post('/', async (req, res) => {
  // insert product to database using post
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
  console.log(req.body);
});

// Delete product by ID
router.delete('/:id', async (req, res) => {
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

router.put('/:id', async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Returns the modified document rather than the original
    );

    // Check if the product was found and updated
    if (updatedProduct) {
      res.json({ message: 'Product updated successfully', updatedProduct });
    } else {
      // If product is not found
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    // Catch any errors that occur during the update process
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
