import React from 'react';
import clsx from 'clsx';
import styles from './Package.module.scss';
import { currencyFormat } from '../../../utils/currencyFormat';
const Package = ({ img, name, price, furniture, small, active, className }) => {
  return (
    <>
      <li className={clsx(styles.package, className, small && styles.packageSmall, active && styles.packageActive)}>
        {active && <div className={clsx(styles.packageActiveIcon)}></div>}
        <img src={img} alt="" className={clsx(styles.packageImg)} />
        <div className={clsx(styles.packageContent)}>
          <span className={clsx(styles.packageName)}>{name}</span>
          <span className={clsx(styles.packagePrice)}>
            {currencyFormat(price)}
            <span>{'₸/м²'}</span>
          </span>
          <ul className={clsx(styles.packageList)}>
            {furniture.map((furnitureItem) => (
              <li className={clsx(styles.packageItem)}>
                <span className={clsx(styles.packageLabel)}>{furnitureItem.label}</span>
                <span className={clsx(styles.packageValue)}>{furnitureItem.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </>
  );
};

export default Package;
