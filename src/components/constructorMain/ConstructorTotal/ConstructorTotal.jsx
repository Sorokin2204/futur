import React from 'react';
import clsx from 'clsx';
import styles from './ConstructorTotal.module.scss';
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router';
const ConstructorTotal = ({ className }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={clsx(styles.total, className)}>
        <ul className={clsx(styles.totalList)}>
          <li className={clsx(styles.totalItem)}>
            <span className={clsx(styles.totalItemRoom)}>Гостиная</span>
            <span className={clsx(styles.totalItemPrice)}>150 300 ₸</span>
          </li>
          <li className={clsx(styles.totalItem)}>
            <span className={clsx(styles.totalItemRoom)}>Итого</span>
            <span className={clsx(styles.totalItemPrice)}>1 278 900 ₸</span>
          </li>
        </ul>
        <Button className={clsx(styles.totalBtnContinue)} onClick={() => navigate('/total')}>
          Продолжить
        </Button>
      </div>
    </>
  );
};

export default ConstructorTotal;
