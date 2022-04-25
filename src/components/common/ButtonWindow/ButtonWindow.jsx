import React from 'react';
import clsx from 'clsx';
import styles from './ButtonWindow.module.scss';
const ButtonWindow = ({ className, onClick }) => {
  return (
    <>
      <button className={clsx(styles.buttonWindow, className)} onClick={onClick}></button>
    </>
  );
};

export default ButtonWindow;
