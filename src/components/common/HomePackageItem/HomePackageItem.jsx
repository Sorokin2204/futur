import React from 'react';
import clsx from 'clsx';
import styles from './HomePackageItem.module.scss';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const HomePackageItem = ({ img, title, text, path }) => {
  const navigate = useNavigate();
  return (
    <>
      <img src={img} alt="" className={clsx(styles.ourWorkItemImg)} />
      <span className={clsx(styles.ourWorkItemTitle)}>{title}</span>
      <p className={clsx(styles.ourWorkItemText)}>{text}</p>
    </>
  );
};

export default HomePackageItem;
