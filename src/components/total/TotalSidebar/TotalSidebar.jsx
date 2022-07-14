import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './TotalSidebar.module.scss';
import { totalList } from '../../../data/list/totals';
import { currencyFormat } from '../../../utils/currencyFormat';
import { getRooms } from '../../../redux/slices/roomSlice';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { getTotalRooms, getTotals } from '../../../redux/slices/totalSlice';
import { getPackages } from '../../../redux/slices/packageSlice';
import { calcFormula } from '../../../utils/calcFormula';
const TotalSidebar = ({ className }) => {
  const dispatch = useDispatch();
  const { data: rooms, loading: loadingRooms } = useSelector((state) => state.room);
  const { data: totals, loading: loadingTotals } = useSelector((state) => state.total);
  const { data: packages, loading: loadingPackage } = useSelector((state) => state.package);

  console.log('render');
  return (
    <>
      <div className={clsx(styles.totalSidebar, className)}>
        <h3 className={clsx(styles.totalTitle)}>Общая стоимость</h3>
        {packages && <span className={clsx(styles.totalPackageName)}>{`Пакет «${packages?.find((packageItem) => packageItem.slug === localStorage['package']).title}» `}</span>}

        {totals && !loadingTotals && (
          <ul className={clsx(styles.totalPackageList)}>
            {totals.map((room) => (
              <li className={clsx(styles.totalPackageItem)}>
                <span className={clsx(styles.totalPackageRoom)}>{room.name}</span>
                <span className={clsx(styles.totalPackagePrice)}>{`${currencyFormat(calcFormula(_.sum(room.options.map((roomOpt) => roomOpt.price))))} ₸`}</span>
              </li>
            ))}
          </ul>
        )}

        <div className={clsx(styles.totalPackageTotal)}>
          <span className={clsx(styles.totalPackageTotalLabel)}>Итого</span>
          <span className={clsx(styles.totalPackageTotalPrice)}>{`${currencyFormat(
            calcFormula(
              _.sum(
                totals?.map((choice) => {
                  return _.sum(choice.options.map((item) => item.price));
                }),
              ),
            ) +
              parseInt(localStorage['area']) * packages?.find((packageItem) => packageItem.slug === localStorage['package'])?.price,
          )} ₸`}</span>
        </div>
      </div>
    </>
  );
};

export default TotalSidebar;
