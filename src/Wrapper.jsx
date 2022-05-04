import React from 'react';
import clsx from 'clsx';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
import { CSSTransition, SwitchTransition, Transition, TransitionGroup } from 'react-transition-group';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ModalThank from './components/common/ModalThank/ModalThank';
import ModalAddRoom from './components/common/ModalAddRoom/ModalAddRoom';
import Alert from './components/common/Alert/Alert';
import ModalGoBack from './components/common/ModalGoBack/ModalGoBack';
import ModalError from './components/common/ModalError/ModalError';
import ModalFeedback from './components/common/ModalFeedback/ModalFeedback';
import { resetRoomSingle } from './redux/slices/roomSingleSlice';
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
  const { modalThank, modalAddRoom, modalGoBack, modalGoBackClearStorage, modalError, modalFeedback, modalThankFeedback } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  return (
    <>
      {/* <div
        style={{
          display: 'grid',
          height: '100%',
          gridTemplateRows: 'auto 1fr auto',
        }}> */}
      {pathname !== '/constructor' && <Header />}
      <main>{children}</main>
      {pathname !== '/constructor' && <Footer />}
      {/* </div> */}
      {modalThank && <ModalThank onClose={() => {}} />}
      {modalThankFeedback && (
        <ModalThank
          onClose={() => {
            dispatch(resetRoomSingle());
            localStorage.clear();
          }}
        />
      )}
      {modalAddRoom && <ModalAddRoom onClose={() => {}} />}
      {modalGoBack && <ModalGoBack onClose={() => {}} />}
      {modalGoBackClearStorage && <ModalGoBack clearStorage onClose={() => {}} />}
      {modalError && <ModalError />}
      {modalFeedback && <ModalFeedback />}
      <Alert />
    </>
  );
};

export default Wrapper;
