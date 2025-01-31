import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const location = useLocation();

  const headerStyle: React.CSSProperties = {
    gridColumn: '1 / span 2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    borderBottom: '1px solid #ccc'
  };

  const navLinkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: 'inherit',
    margin: '0 30px',
    paddingRight: '20px',
    fontSize: '18px'
  };

  const activeNavLinkStyle: React.CSSProperties = {
    color: '#007BFF'
  };

  return (
    <div style={headerStyle}>
      <img src={logo} alt="IKEA Logo" style={{ width: '100px', marginBottom: '20px' }} />
      <div>
        <Link to="/" style={location.pathname === '/' ? { ...navLinkStyle, ...activeNavLinkStyle } : navLinkStyle}>Home</Link>
        <Link to="/create" style={location.pathname === '/create' ? { ...navLinkStyle, ...activeNavLinkStyle } : navLinkStyle}>Create</Link>
      </div>
    </div>
  );
};

export default Header;