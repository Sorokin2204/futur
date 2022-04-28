import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './Modal.module.scss';
import Overlay from '../Overlay/Overlay';
const Modal = ({ children, onClose, title, className, withCloseBtn, bigTitle }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <div className={clsx(styles.modal, className)}>
        <div className={clsx(styles.modalHead)}>
          <span className={clsx(styles.modalTitle, bigTitle && styles.modalTitleBig)}>{title}</span>
          {withCloseBtn && <button className={clsx(styles.modalClose)} onClick={() => onClose()}></button>}
        </div>
        {children}
      </div>
      <Overlay onClick={() => onClose()} />
    </>
  );
};

export default Modal;
