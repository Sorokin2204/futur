import React from 'react';
import clsx from 'clsx';
import styles from './Loader.module.scss';
import Overlay from '../common/Overlay/Overlay';
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
      <Overlay />
    </>
  );
};

export default Loader;
