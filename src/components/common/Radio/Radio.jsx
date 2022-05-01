import React from 'react';
import clsx from 'clsx';
import styles from './Radio.module.scss';
import { generateRandomString } from '../../../utils/generateRandomString';
const Radio = ({ label, className, block, value, name, register, onClick }) => {
  const randomId = generateRandomString(5);
  return (
    <>
      <input name={name} id={randomId} type="radio" className={clsx(styles.radioInput)} label={label} value={value} {...(typeof register == 'undefined' || register(name))} />
      <label onClick={onClick} htmlFor={randomId} className={clsx(block ? styles.radioLabelTextBlock : styles.radioLabelText)}>
        {!block && <div className={clsx(styles.circle)}></div>} {label}
      </label>
    </>
  );
};

export default Radio;
