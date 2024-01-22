import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

const UserListScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get('/api/users');
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);
  const history = useNavigate(); // for back button

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`/api/users/${userId}`);
      // Update the local state to reflect the deletion
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  const goBackToAdminPage = () => {
    // Use navigate function to go back to the admin page
    history('/admin'); // Replace '/admin-page' with the actual route for your admin page
  };

  return (
    <>
      <h1>User List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>User Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.userType}</td>
              <td>
                <Link to={`/EditUserScreen/${user._id}`}>
                  <Button variant="info">Edit</Button>
                </Link>
                <Button variant="danger" onClick={() => handleDelete(user._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button onClick={goBackToAdminPage}>Back to Admin Page</Button>
    </>
  );
};

export default UserListScreen;
