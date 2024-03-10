import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminPage = () => {
  const navigate = useNavigate(); // for back button

  const [productName, setProductName] = useState('');
  const [productImage, setProductImage] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productRating, setProductRating] = useState(0);
  const [productNumReviews, setProductNumReviews] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const [productCount, setProductCount] = useState(0);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/product', {
        MyName: productName,
        MyImage: productImage,
        MyBrand: productBrand,
        MyCategory: productCategory,
        MyDescription: productDescription,
        MyRating: productRating,
        MyNumReivews: productNumReviews,
        MyPrice: productPrice,
        ProductCount: productCount,
      });

      console.log('Product added successfully:', response.data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProductImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const goBackToAdminPanel = () => {
    // Use navigate function to go back to the admin panel
    navigate('/admin'); // Replace '/admin-panel' with the actual route for your admin panel
  };
  return (
    <div className="admin-container">
      <div className="admin-card">
        <h2>Add Product (Admin)</h2>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="productName">Product Name:</label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="productImage">Product Image URL:</label>
            <input
              type="file"
              id="productImage"
              onChange={handleImageUpload}
              accept="image/*"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="productBrand">Product Brand:</label>
            <input
              type="text"
              id="productBrand"
              value={productBrand}
              onChange={(e) => setProductBrand(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="productCategory">Product Category:</label>
            <input
              type="text"
              id="productCategory"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="productDescription">Product Description:</label>
            <textarea
              style={{ width: '1300px' }} // Adjust the width as needed
              id="productDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="productRating">Product Rating:</label>
            <input
              type="number"
              id="productRating"
              value={productRating}
              onChange={(e) => setProductRating(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="productNumReviews">Number of Reviews:</label>
            <input
              type="number"
              id="productNumReviews"
              value={productNumReviews}
              onChange={(e) => setProductNumReviews(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="productPrice">Product Price:</label>
            <input
              type="number"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="productCount">Product Count:</label>
            <input
              type="number"
              id="productCount"
              value={productCount}
              onChange={(e) => setProductCount(e.target.value)}
              required
            />
          </div>

          <button type="submit">Add Product</button>
        </form>
        <button onClick={goBackToAdminPanel}>Back to Admin Panel</button>
      </div>
    </div>
  );
};

export default AdminPage;
