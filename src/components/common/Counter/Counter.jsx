import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './Counter.module.scss';
const Counter = ({ className, label, afterText, register, name, setValue, watch }) => {
  const number = watch?.(name);

  const handleClickDecrement = () => {
    if (number != 1) {
      setValue?.(name, number - 1);
    }
  };
  const handleClickIncrement = () => {
    setValue?.(name, number + 1);
  };
  const counterRegister = register?.(name);
  return (
    <>
      <div className={clsx(styles.counter, className)}>
        <input type="number" className={clsx(styles.counterInput)} {...(typeof counterRegister == 'undefined' || counterRegister)} />
        <span className={clsx(styles.counterLabel)}>{label}</span>
        <div className={clsx(styles.counterContent)}>
          <button className={clsx(styles.counterMinus)} onClick={handleClickDecrement}>
            -
          </button>
          <div className={clsx(styles.counterText)}>{`${number}${afterText || ''}`}</div>
          <button className={clsx(styles.counterPlus)} onClick={handleClickIncrement}>
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
