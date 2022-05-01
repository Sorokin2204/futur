import React from 'react';
import clsx from 'clsx';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import { CSSTransition, SwitchTransition, Transition, TransitionGroup } from 'react-transition-group';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ModalThank from './components/common/ModalThank/ModalThank';
import ModalAddRoom from './components/common/ModalAddRoom/ModalAddRoom';
import Alert from './components/common/Alert/Alert';
/** Used for Using Transitions Section */
const routes = ['constructor/:id'];
const transitions = {
  entering: { transform: 'translateY(-20%)', visibility: 'visible' },
  entered: { transform: 'translateY(0%)', opacity: 1, visibility: 'visible' },
  exiting: { transform: 'translateY(-20%)', opacity: 0, visibility: 'hidden' },
  exited: { transform: 'translateY(0%)', opacity: '0', visibility: 'hidden' },
};

const Wrapper = ({ children }) => {
  const { pathname } = useLocation();
  const checkConstructorPage = (path) => {
    if (path.includes('/constructor')) {
      const replacePath = path.replace('/constructor', '');
      if (replacePath == '/') return false;
      if (replacePath) return true;
    }
    return false;
  };
  const isConstructorPage = checkConstructorPage(pathname);
  const { modalThank, modalAddRoom } = useSelector((state) => state.modals);
  return (
    <>
      {/* <div
        style={{
          display: 'grid',
          height: '100%',
          gridTemplateRows: 'auto 1fr auto',
        }}> */}
      {!isConstructorPage && <Header />}
      <main>{children}</main>
      {!isConstructorPage && <Footer />}
      {/* </div> */}
      {modalThank && <ModalThank onClose={() => {}} />}
      {modalAddRoom && <ModalAddRoom onClose={() => {}} />}
      <Alert />
    </>
  );
};

export default Wrapper;
