import React from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';
const Input = (props) => {
  return (
    <>
      <label className={clsx(styles.inputLabel, props.className)}>
        <input placeholder={props.placeholder} className={clsx(styles.input)} /> <span className={clsx(styles.inputTextLabel)}>{props.label}</span>
      </label>
    </>
  );
};

export default Input;
