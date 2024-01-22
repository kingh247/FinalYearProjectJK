import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const EditUserScreen = () => {
  const { id: userId } = useParams();
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    userType: '',
  });
  const history = useNavigate(); // for back button

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`/api/users/${userId}`);
        setUser(data);
        setFormData({
          username: data.username,
          email: data.email,
          userType: data.userType,
        });
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, [userId]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/api/users/${userId}`, formData);
      history('/UserListScreen');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const goBackToAdminPage = () => {
    // Use navigate function to go back to the admin page
    history('/UserListScreen'); // Replace '/admin-page' with the actual route for your admin page
  };

  return (
    <>
      <Link to="/UserListScreen" className="btn btn-light my-3">
        Go Back
      </Link>
      <h1>Edit User</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="userType">
          <Form.Label>UserType</Form.Label>
          <Form.Control
            type="userType"
            placeholder="Enter userType"
            name="userType"
            value={formData.userType}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update User
        </Button>
        {/* Add the back button */}
        <Button onClick={goBackToAdminPage}>Back to User List</Button>
      </Form>
    </>
  );
};

export default EditUserScreen;
