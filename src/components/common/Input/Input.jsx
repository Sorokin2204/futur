import React from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';
const Input = (props) => {
  return (
    <>
      <label className={clsx(styles.inputLabel, props.className, props.responsive && styles.inputLabelMobile)}>
        {props.textarea ? <textarea rows={props.rows.toString()} placeholder={props.placeholder} className={clsx(styles.input, styles.textarea)} /> : <input placeholder={props.placeholder} className={clsx(styles.input)} />}
        <span className={clsx(styles.inputTextLabel, props.smallLabel && styles.inputTextLabelSmall)}>{props.label}</span>
      </label>
    </>
  );
};

export default Input;
