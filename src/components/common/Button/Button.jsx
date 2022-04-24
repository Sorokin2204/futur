import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.scss';
const Button = ({ children, arrow, text, className, onClick, icon, small, smallOutline }) => {
  return (
    <>
      <button data-icon={icon} onClick={onClick} className={clsx(styles.btn, smallOutline ? styles.btnSmallOutline : small ? styles.btnSmall : icon ? styles.btnIcon : arrow && styles.btnArrow, text && styles.btnText, className)}>
        {icon && <div className={styles.btnIconImg} style={{ WebkitMaskImage: `url(${icon})` }} />}
        {children}
      </button>
    </>
  );
};

export default Button;
