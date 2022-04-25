import React from 'react';
import clsx from 'clsx';
import styles from './SwitchWindow.module.scss';
import { generateRandomString } from '../../../utils/generateRandomString';
const SwitchWindow = ({ className }) => {
  const randomId = generateRandomString(5);
  return (
    <>
      <label htmlFor={randomId} className={clsx(styles.switchLabel, className)}>
        <input id={randomId} type="checkbox" className={clsx(styles.switchInput)} />
        <span className={clsx(styles.switchText)}>Посмотреть с мебелью</span>
      </label>
    </>
  );
};

export default SwitchWindow;
