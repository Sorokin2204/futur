import React from 'react';
import clsx from 'clsx';
import styles from './TotalSidebar.module.scss';
import { totalList } from '../../../data/list/totals';
import { currencyFormat } from '../../../utils/currencyFormat';
const TotalSidebar = ({ className }) => {
  return (
    <>
      <div className={clsx(styles.totalSidebar, className)}>
        <h3 className={clsx(styles.totalTitle)}>Общая стоимость</h3>
        <span className={clsx(styles.totalPackageName)}>Пакет «Отбасы» </span>
        <ul className={clsx(styles.totalPackageList)}>
          {totalList.map((totalItem) => (
            <li className={clsx(styles.totalPackageItem)}>
              <span className={clsx(styles.totalPackageRoom)}>{totalItem.room}</span>
              <span className={clsx(styles.totalPackagePrice)}>{`${currencyFormat(totalItem.price)} ₸`}</span>
            </li>
          ))}
        </ul>
        <div className={clsx(styles.totalPackageTotal)}>
          <span className={clsx(styles.totalPackageTotalLabel)}>Итого</span>
          <span className={clsx(styles.totalPackageTotalPrice)}>1 278 900 ₸</span>
        </div>
      </div>
    </>
  );
};

export default TotalSidebar;
