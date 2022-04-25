import React from 'react';
import clsx from 'clsx';
import styles from './Modal.module.scss';
import Overlay from '../Overlay/Overlay';
const Modal = ({ children, onClose, title, className, withCloseBtn }) => {
  return (
    <>
      <div className={clsx(styles.modal, className)}>
        <div className={clsx(styles.modalHead)}>
          <span className={clsx(styles.modalTitle)}>{title}</span>
          {withCloseBtn && <button className={clsx(styles.modalClose)} onClick={() => onClose()}></button>}
        </div>
        {children}
      </div>
      <Overlay onClick={() => onClose()} />
    </>
  );
};

export default Modal;
