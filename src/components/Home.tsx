import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import plusIcon from '../assets/plus.png';
import { getAllProducts } from '../api/products';
import { Product } from '../types';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setProducts(products);
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const containerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: '10% 10% 80%',
    gridTemplateColumns: '50% 50%',
    gap: '20px',
    height: '100vh',
    margin: '0 40px',
    fontSize: '20px'
  };

  const textStyle: React.CSSProperties = {
    gridColumn: '1 / span 2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const mainContentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    position: 'relative',
    padding: '20px'
  };

  const searchWrapperStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20px',
    width: '80%',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px'
  };

  const iconStyle: React.CSSProperties = {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#f1f1f1',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px'
  };

  const inputStyle: React.CSSProperties = {
    padding: '10px',
    fontSize: '16px',
    border: 'none',
    width: '100%',
    boxSizing: 'border-box',
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px'
  };

  const dropdownStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    borderTop: 'none',
    borderRadius: '0 0 4px 4px',
    maxHeight: '300px',
    overflowY: 'auto',
    position: 'absolute',
    width: '80%',
    backgroundColor: 'white',
    zIndex: 1,
    boxSizing: 'border-box',
    top: '100%',
    left: 0
  };

  const tableStyle: React.CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse'
  };

  const thStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    padding: '10px',
    backgroundColor: '#f1f1f1'
  };

  const tdStyle: React.CSSProperties = {
    border: '1px solid #ccc',
    padding: '10px'
  };

  const addProductContainerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  };

  const addProductStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '80%', 
    height: '80%',
    aspectRatio: '1 / 1', 
    margin: '20px auto'
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={textStyle}>
        <h1>Hello and welcome to IKEA product tool</h1>
        <p>Here you can browse our exciting range of IKEA products. Use the search bar to find specific items, or explore our categories to discover what you need. If there is something missing, you can even add your own products to our collection.</p>
      </div>
      <div style={mainContentStyle}>
        <div style={{ position: 'relative' }}>
          <div style={searchWrapperStyle}>
            <div style={iconStyle}>🔍</div>
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={dropdownStyle}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thStyle}>ID</th>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Product Type</th>
                  <th style={thStyle}>Colors</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <tr key={index} onClick={() => console.log(product.name)}>
                    <td style={tdStyle}>{product._id}</td>
                    <td style={tdStyle}>{product.name}</td>
                    <td style={tdStyle}>{product.type}</td>
                    <td style={tdStyle}>{product.colours.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div style={addProductContainerStyle}>
        <Link to="/create" style={{ textDecoration: 'none', color: 'inherit', width: '100%', height: '100%' }}>
          <div style={addProductStyle}>
            <h2>Add a new product</h2>
            <img src={plusIcon} alt="Add new product" style={{ width: '50px', marginTop: '10px' }} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;