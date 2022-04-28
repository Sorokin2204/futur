import React from 'react';
import clsx from 'clsx';
import styles from './ConstructorTotal.module.scss';
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router';
import { totalList } from '../../../data/list/totals';
import { currencyFormat } from '../../../utils/currencyFormat';
const ConstructorTotal = ({ className }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={clsx(styles.total, className)}>
        <ul className={clsx(styles.totalList)}>
          <li className={clsx(styles.totalItem)}>
            <span className={clsx(styles.totalItemRoom)}>{totalList[0].room}</span>
            <span className={clsx(styles.totalItemPrice)}>{`${currencyFormat(totalList[0].price)} ₸`}</span>
          </li>

          <li className={clsx(styles.totalItem)}>
            <span className={clsx(styles.totalItemRoom)}>Итог</span>
            <span className={clsx(styles.totalItemPrice)}>{`${currencyFormat(432443)} ₸`}</span>
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
