import React from 'react';
import clsx from 'clsx';
import styles from './Overlay.module.scss';
const Overlay = (props) => {
  return <div {...props} className={clsx(styles.overlay)}></div>;
};

export default Overlay;
