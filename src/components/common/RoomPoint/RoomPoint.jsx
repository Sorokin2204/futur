import React from 'react';
import clsx from 'clsx';
import styles from './RoomPoint.module.scss';
import { generateRandomString } from '../../../utils/generateRandomString';
const RoomPoint = ({ className, label, value, x, y, name }) => {
  const randomId = generateRandomString(5);
  return (
    <>
      <label htmlFor={randomId} className={clsx(styles.roomPointLabel, className)} style={{ top: y + '%', left: x + '%' }}>
        <input type="radio" id={randomId} className={clsx(styles.roomPointInput)} value={value} name={name} />
        <span className={clsx(styles.roomPointTextLabel)}>{label}</span>
      </label>
    </>
  );
};

export default RoomPoint;
