import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={styles.navbar}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/post" style={styles.link}>Post</Link>
    </div>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#333',
    padding: '10px',
    marginBottom: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
    fontSize: '18px',
  },
};

export default Navbar;
