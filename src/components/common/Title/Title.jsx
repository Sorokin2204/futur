import React from 'react';
import clsx from 'clsx';
import styles from './Title.module.scss';
const Title = ({ children, className }) => {
  return (
    <>
      <h2 className={clsx(styles.title, className)} data-title={children}>
        {children}
      </h2>
    </>
  );
};

export default Title;
