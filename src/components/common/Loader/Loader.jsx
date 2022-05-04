import React from 'react';
import clsx from 'clsx';
import styles from './Loader.module.scss';
import Overlay from '../Overlay/Overlay';
const Loader = () => {
  return (
    <>
      <div className={clsx(styles.spinner)}>
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
      <Overlay style={{ position: 'absolute' }} />
    </>
  );
};

export default Loader;
