import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import { getAllColours } from '../api/colours';
import { getAllProductTypes } from '../api/producttypes';
import { Colour, ProductType } from '../types';
import { createProduct } from '../api/products';

const CreateProduct = () => {
  const [colorQuery, setColorQuery] = useState('');
  const [productTypeQuery, setProductTypeQuery] = useState('');
  const [productName, setProductName] = useState('');
  const [colors, setColors] = useState<Colour[]>([]);
  const [selectedColors, setSelectedColors] = useState<Colour[]>([]);
  const [productTypes, setProductTypes] = useState<ProductType[]>([]);
  const [selectedProductType, setSelectedProductType] = useState<ProductType | null>(null);
  const navigate = useNavigate();

  const resetState = () => {
    setProductName('');
    setSelectedColors([]);
    setSelectedProductType(null);
    navigate('/')
  }

  useEffect(() => {
    const fetchColours = async () => {
      const colours = await getAllColours();
      setColors(colours);
    };

    const fetchProductTypes = async () => {
      const productTypes = await getAllProductTypes();
      setProductTypes(productTypes);
    };

    fetchColours();
    fetchProductTypes();
  }, []);

  const filteredColors = colors.filter(color =>
    color.name.toLowerCase().includes(colorQuery.toLowerCase())
  );

  const filteredProductTypes = productTypes.filter(productType =>
    productType.name.toLowerCase().includes(productTypeQuery.toLowerCase())
  );

  const handleColorSelect = (color: Colour) => {
    setSelectedColors(prevSelectedColors => {
      if (prevSelectedColors.includes(color)) {
        return prevSelectedColors.filter(c => c !== color);
      } else {
        return [...prevSelectedColors, color];
      }
    });
  };

  const handleProductTypeSelect = (productType: ProductType) => {
    setSelectedProductType(productType);
  };

  const handleSubmit = () => {
    if (!productName || !selectedProductType || selectedColors.length === 0) {
      alert('Please fill out all fields');
      resetState();
      return;
    }
    console.log('Product Name:', productName);
    console.log('Product Type:', selectedProductType);
    console.log('Colours:', selectedColors);
    createProduct({name: productName, typeId: selectedProductType?._id, colourIds: selectedColors.map(color => color._id)});
    resetState();
  }

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
    alignItems: 'stretch'
  };

  const searchContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start'
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
    width: '100%',
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

  const selectedListItemStyle: React.CSSProperties = {
    ...listItemStyle,
    backgroundColor: '#007BFF',
    color: 'white'
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    margin: 'auto 0'
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
                    style={selectedColors.includes(color) ? selectedListItemStyle : listItemStyle}
                    onClick={() => handleColorSelect(color)}
                  >
                    {color.name}
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
                    style={selectedProductType === productType ? selectedListItemStyle : listItemStyle}
                    onClick={() => handleProductTypeSelect(productType)}
                  >
                    {productType.name}
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
          <button style={buttonStyle} onClick={handleSubmit}>Submit</button>
          <button style={buttonStyle} onClick={resetState}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;