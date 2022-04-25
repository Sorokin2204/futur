import React from 'react';
import clsx from 'clsx';
import styles from './SelectWindow.module.scss';
const SelectWindow = ({ className }) => {
  return (
    <>
      <div className={clsx(styles.select, className)}>
        <div className={clsx(styles.selectName)}>Comfort +</div>
        <div className={clsx(styles.selectPrice)}>50 900 ₸/м² </div>
      </div>
    </>
  );
};

export default SelectWindow;
