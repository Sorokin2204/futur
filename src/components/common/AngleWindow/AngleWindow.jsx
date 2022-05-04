import React from 'react';
import clsx from 'clsx';
import styles from './AngleWindow.module.scss';
import { useDispatch } from 'react-redux';
import { nextAngle, prevAngle } from '../../../redux/slices/roomSingleSlice';
const AngleWindow = ({ className }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={clsx(styles.angle, className)}>
        <span className={clsx(styles.angleText)}>Ракурс </span>
        <button
          className={clsx(styles.angleBtn, styles.angleBtnPrev)}
          onClick={() => {
            dispatch(prevAngle());
          }}></button>
        <button
          className={clsx(styles.angleBtn, styles.angleBtnNext)}
          onClick={() => {
            dispatch(nextAngle());
          }}></button>
      </div>
    </>
  );
};

export default AngleWindow;
