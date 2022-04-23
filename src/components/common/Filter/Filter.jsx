import React from 'react';
import clsx from 'clsx';
import styles from './Filter.module.scss';
const Filter = ({ children, className }) => {
  return (
    <>
      <ul className={clsx(styles.filter, className)}>{children}</ul>
    </>
  );
};

export default Filter;
