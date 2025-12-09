// src/layouts/MainLayout.jsx
import React from 'react';
import Header from '../components/Header';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '20px' }}>
        {children}
      </div>
    </>
  );
};

export default MainLayout;
