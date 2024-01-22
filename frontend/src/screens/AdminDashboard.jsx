import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Welcome to Admin Dashboard</h2>
      <div className="dashboard-buttons">
        <Link to="/product">
          <button>Manage Products</button>
        </Link>
        <Link to="/productList">
          <button>View Product List</button>
        </Link>
        <Link to="/UserListScreen">
          <button>View User List</button>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
