import React from 'react';
import clsx from 'clsx';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
const Wrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Wrapper;
