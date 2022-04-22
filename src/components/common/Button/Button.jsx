import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
const Button = ({ children, arrow, text, className }) => {
  return (
    <>
      <button className={clsx(styles.btn, className, arrow && styles.btnArrow, text && styles.btnText)}>{children}</button>
    </>
  );
};

export default Button;
