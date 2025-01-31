import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const CreateProduct = () => {
  const [colorQuery, setColorQuery] = useState('');
  const [productTypeQuery, setProductTypeQuery] = useState('');
  const [productName, setProductName] = useState('');
  const navigate = useNavigate();

  const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Black'];
  const productTypes = ['Chair', 'Table', 'Bed', 'Sofa', 'Shelf'];

  const filteredColors = colors.filter(color =>
    color.toLowerCase().includes(colorQuery.toLowerCase())
  );

  const filteredProductTypes = productTypes.filter(productType =>
    productType.toLowerCase().includes(productTypeQuery.toLowerCase())
  );

  const containerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: '10% 10% 80%',
    gridTemplateColumns: '100%',
    gap: '20px',
    height: '100vh',
    margin: '0 40px',
    fontSize: '20px'
  };

  const headerStyle: React.CSSProperties = {
    gridColumn: '1 / span 2',
    display: 'flex',
    alignItems: 'center'
  };

  const textStyle: React.CSSProperties = {
    gridColumn: '1 / span 2',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const mainContentStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    gap: '20px',
    padding: '20px',
    alignItems: 'stretch' // Allow child elements to control their own alignment
  };

  const searchContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start' // Align items to the top
  };

  const searchWrapperStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
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
    width: '100%', // Match the width of the search bar
    backgroundColor: 'white',
    zIndex: 1,
    boxSizing: 'border-box',
    top: '100%',
    left: 0
  };

  const listItemStyle: React.CSSProperties = {
    padding: '10px',
    cursor: 'pointer'
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    margin: 'auto 0' // Center vertically
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white'
  };

  const inputGridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: 'auto auto',
    gap: '20px'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <img src={logo} alt="IKEA Logo" style={{ width: '100px', marginBottom: '20px' }} />
      </div>
      <div style={textStyle}>
        <h1>Here you can add your own products to the IKEA line</h1>
        <p>Add a product to the IKEA line and share what product type it is and which colors the product has.</p>
      </div>
      <div style={mainContentStyle}>
        <div style={inputGridStyle}>
          <div style={searchContainerStyle}>
            <div style={{ position: 'relative', width: '100%' }}>
              <div style={searchWrapperStyle}>
                <div style={iconStyle}>🔍</div>
                <input
                  type="text"
                  placeholder="Search for color..."
                  value={colorQuery}
                  onChange={(e) => setColorQuery(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div style={dropdownStyle}>
                {(colorQuery ? filteredColors : colors).map((color, index) => (
                  <div
                    key={index}
                    style={listItemStyle}
                    onClick={() => setColorQuery(color)}
                  >
                    {color}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative', width: '100%' }}>
              <div style={searchWrapperStyle}>
                <div style={iconStyle}>🔍</div>
                <input
                  type="text"
                  placeholder="Search for product type..."
                  value={productTypeQuery}
                  onChange={(e) => setProductTypeQuery(e.target.value)}
                  style={inputStyle}
                />
              </div>
              <div style={dropdownStyle}>
                {(productTypeQuery ? filteredProductTypes : productTypes).map((productType, index) => (
                  <div
                    key={index}
                    style={listItemStyle}
                    onClick={() => setProductTypeQuery(productType)}
                  >
                    {productType}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ position: 'relative', width: '100%' }}>
            <div style={searchWrapperStyle}>
              <div style={iconStyle}>🔍</div>
              <input
                type="text"
                placeholder="Enter product name..."
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                style={inputStyle}
              />
            </div>
          </div>
        </div>
        <div style={buttonContainerStyle}>
          <button style={buttonStyle} onClick={() => console.log('Submit clicked')}>Submit</button>
          <button style={buttonStyle} onClick={() => navigate('/')}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;