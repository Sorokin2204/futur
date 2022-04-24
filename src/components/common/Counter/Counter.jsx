import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './Counter.module.scss';
const Counter = ({ className, label, afterText }) => {
  const [number, setNumber] = useState(1);

  const handleClickDecrement = () => {
    if (number != 1) setNumber(number - 1);
  };

  const handleClickIncrement = () => {
    setNumber(number + 1);
  };
  return (
    <>
      <div className={clsx(styles.counter, className)}>
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
