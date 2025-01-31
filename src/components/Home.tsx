import React from 'react';
import logo from '../assets/logo.png';

const Home = () => {
  const containerStyle = {
    margin: '40px',
    maxWidth: '50%',
    fontSize: '20px'
  };

  return (
    <div style={containerStyle}> 
      <img src={logo} alt="IKEA Logo" style={{ width: '100px', marginBottom: '20px' }} />
      <h1>Hello and welcome to IKEA product tool</h1>
      <p>Here you can browse our exciting range of IKEA products. Use the search bar to find specific items, or explore our categories to discover what you need. If there is something missing, you can even add your own products to our collection.
      </p>
    </div>
  );
};

export default Home;