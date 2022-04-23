import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
const Button = ({ children, arrow, text, className, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={clsx(styles.btn, className, arrow && styles.btnArrow, text && styles.btnText)}>
        {children}
      </button>
    </>
  );
};

export default Button;
