import React from 'react';
import clsx from 'clsx';
import styles from './OurWorkItem.module.scss';
import Button from '../Button/Button';
const OurWorkItem = ({ img, title, text, path }) => {
  return (
    <>
      <img src={img} alt="" className={clsx(styles.ourWorkItemImg)} />
      <span className={clsx(styles.ourWorkItemTitle)}>{title}</span>
      <p className={clsx(styles.ourWorkItemText)}>{text}</p>
      <Button className={clsx(styles.ourWorkItemBtn)} text>
        посмотреть
      </Button>
    </>
  );
};

export default OurWorkItem;
