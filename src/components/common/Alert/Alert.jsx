import React from 'react';
import clsx from 'clsx';
import styles from './Alert.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert } from '../../../redux/slices/alertSlice';
const Alert = () => {
  const dispatch = useDispatch();
  const { show, text, type } = useSelector((state) => state.alert);
  const types = {
    error: {
      icon: '/icons/error.svg',
      class: styles.alertError,
    },
    success: {
      icon: '/icons/check.svg',
      class: styles.alertSuccess,
    },
  };
  return (
    <>
      <div className={clsx(styles.alert, show && styles.alertShow, types[type]?.class)} onClick={() => dispatch(closeAlert())}>
        <div
          style={{
            WebkitMaskImage: `url(${types[type]?.icon})`,
          }}
          alt=""
          className={clsx(styles.alertImg)}
        />
        <p className={clsx(styles.alertText)}>{text}</p>
      </div>
    </>
  );
};

export default Alert;
