import React from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';
const Input = (props) => {
  return (
    <>
      <label className={clsx(styles.inputLabel, props.className)}>
        <span className={clsx(styles.inputTextLabel)}>{props.label}</span>
        <input placeholder={props.placeholder} className={clsx(styles.input)} />
      </label>
    </>
  );
};

export default Input;
