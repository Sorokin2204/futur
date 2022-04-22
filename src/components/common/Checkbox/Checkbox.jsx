import React from 'react';
import clsx from 'clsx';
import styles from './Checkbox.module.scss';
const Checkbox = ({ label, className }) => {
  return (
    <>
      <label className={clsx(styles.checkboxInput, className)}>
        <input type={'checkbox'} className={clsx(styles.checkbox)} />
        <span className={clsx(styles.checkboxTextLabel)}> {label}</span>
      </label>
    </>
  );
};

export default Checkbox;
