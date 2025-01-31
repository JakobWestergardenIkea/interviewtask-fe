import React from 'react';
import { BrowserRouter as Router, Route, Routes, RouteProps } from 'react-router-dom';
import Home from './components/Home';
import CreateProduct from './components/CreateProduct';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateProduct />} />
    </Routes>
  );
};

export default App;