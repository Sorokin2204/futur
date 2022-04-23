import React from 'react';
import clsx from 'clsx';
import styles from './OurWorkItem.module.scss';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const OurWorkItem = ({ img, title, text, path }) => {
  const navigate = useNavigate();
  return (
    <>
      <img src={img} alt="" className={clsx(styles.ourWorkItemImg)} />
      <span className={clsx(styles.ourWorkItemTitle)}>{title}</span>
      <p className={clsx(styles.ourWorkItemText)}>{text}</p>
      <Button
        onClick={() => {
          console.log('wpr');
          navigate('/works/new-work');
        }}
        className={clsx(styles.ourWorkItemBtn)}
        text>
        посмотреть
      </Button>
    </>
  );
};

export default OurWorkItem;
