import React from 'react';
import clsx from 'clsx';
import styles from './AngleWindow.module.scss';
const AngleWindow = ({ className }) => {
  return (
    <>
      <div className={clsx(styles.angle, className)}>
        <span className={clsx(styles.angleText)}>Ракурс </span>
        <button className={clsx(styles.angleBtn, styles.angleBtnPrev)}></button>
        <button className={clsx(styles.angleBtn, styles.angleBtnNext)}></button>
      </div>
    </>
  );
};

export default AngleWindow;
