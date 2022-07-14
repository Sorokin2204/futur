import React from 'react';
import clsx from 'clsx';
import styles from './Loader.module.scss';
import Overlay from '../Overlay/Overlay';
const Loader = ({ light }) => {
  return (
    <>
      <div className={clsx(styles.spinner, light && styles.spinnerWhite)}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Overlay style={{ position: 'absolute' }} light={light} />
    </>
  );
};

export default Loader;
