import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [users, setUsers] = useState([]);
  console.log(users);
  const [openUserIds, setOpenUserIds] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await axios.get('https://cointable-backend-1.onrender.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users: ', error);
    }
  };

  const toggleOpen = userId => {
    setOpenUserIds(prevOpenUserIds =>
      prevOpenUserIds.includes(userId)
        ? prevOpenUserIds.filter(id => id !== userId)
        : [...prevOpenUserIds, userId]
    );
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ marginBottom: '20px' }}>Cointab SE-ASSIGNMENT</h1>
      <button style={{ marginBottom: '20px' }} onClick={getAllUsers}>Fetch All Users</button>
      {users.map(user => (
        <div key={user.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
          <p>City: {user.address.city}</p>
          <p>Company: {user.company.name}</p>
          {openUserIds.includes(user.id) ? (
            <button><Link to={`/post/${user.id}`} style={{ textDecoration: 'none', color: '#333' }}>Open</Link></button>
          ) : (
            <button onClick={() => toggleOpen(user.id)}>Add</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Home;
