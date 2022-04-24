import React from 'react';
import clsx from 'clsx';
import styles from './Modal.module.scss';
import Overlay from '../Overlay/Overlay';
const Modal = ({ children, onClose, title, className }) => {
  return (
    <>
      <div className={clsx(styles.modal, className)}>
        <div className={clsx(styles.modalHead)}>
          <span className={clsx(styles.modalTitle)}>{title}</span>
          <button className={clsx(styles.modalClose)} onClick={() => onClose()}></button>
        </div>
        {children}
      </div>
      <Overlay onClick={() => onClose()} />
    </>
  );
};

export default Modal;
