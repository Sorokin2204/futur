import React from 'react';
import clsx from 'clsx';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import { CSSTransition, SwitchTransition, Transition, TransitionGroup } from 'react-transition-group';
import { useState } from 'react';
import { useEffect } from 'react';

/** Used for Using Transitions Section */
const transitions = {
  entering: { transform: 'translateY(-20%)', visibility: 'visible' },
  entered: { transform: 'translateY(0%)', opacity: 1, visibility: 'visible' },
  exiting: { transform: 'translateY(-20%)', opacity: 0, visibility: 'hidden' },
  exited: { transform: 'translateY(0%)', opacity: '0', visibility: 'hidden' },
};

const Wrapper = ({ children }) => {
  return (
    <>
      {/* <div
        style={{
          display: 'grid',
          height: '100%',
          gridTemplateRows: 'auto 1fr auto',
        }}> */}
      <Header />

      <main>{children}</main>

      <Footer />
      {/* </div> */}
    </>
  );
};

export default Wrapper;
