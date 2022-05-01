import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.scss';
import Overlay from '../Overlay/Overlay';
import { closeAllModal } from '../../../redux/slices/modalsSlice';
import { useDispatch } from 'react-redux';
const Modal = ({ children, onAfterClose, title, className, withCloseBtn, bigTitle }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);
  const onClickCloseBtn = () => {
    dispatch(closeAllModal());
    onAfterClose?.();
  };
  return (
    <>
      <div className={clsx(styles.modal, className)}>
        <div className={clsx(styles.modalHead)}>
          <span className={clsx(styles.modalTitle, bigTitle && styles.modalTitleBig)}>{title}</span>
          {withCloseBtn && <button className={clsx(styles.modalClose)} onClick={onClickCloseBtn}></button>}
        </div>
        {children}
      </div>
      <Overlay onAfterClose={onAfterClose} closes />
    </>
  );
};

export default Modal;
