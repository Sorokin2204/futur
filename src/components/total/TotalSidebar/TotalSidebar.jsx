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
const TotalSidebar = ({ className }) => {
  const dispatch = useDispatch();
  const { data: rooms, loading: loadingRooms } = useSelector((state) => state.room);
  const { data: totals, loading: loadingTotals } = useSelector((state) => state.total);
  const { data: packages, loading: loadingPackage } = useSelector((state) => state.package);
  useEffect(() => {
    dispatch(getRooms());
    dispatch(getTotals());
    dispatch(getPackages());
  }, []);
  useEffect(() => {
    console.log(totals);
  }, [totals]);

  useEffect(() => {
    if (totals && rooms) {
      dispatch(getTotalRooms({ rooms }));
    }
  }, [totals, rooms]);

  useEffect(() => {
    if (packages) console.log(packages);
  }, [packages]);

  useEffect(() => {
    console.log(rooms);
  }, [rooms]);
  console.log('render');
  return (
    <>
      <div className={clsx(styles.totalSidebar, className)}>
        <h3 className={clsx(styles.totalTitle)}>Общая стоимость</h3>
        {packages && <span className={clsx(styles.totalPackageName)}>{`Пакет «${packages?.find((packageItem) => packageItem.slug === localStorage['package']).name}» `}</span>}

        {rooms && !loadingRooms && (
          <ul className={clsx(styles.totalPackageList)}>
            {Object.keys(JSON.parse(localStorage['total'])).map((roomLocal) => (
              <li className={clsx(styles.totalPackageItem)}>
                <span className={clsx(styles.totalPackageRoom)}>{rooms.find((room) => room.slug === roomLocal).name}</span>
                <span className={clsx(styles.totalPackagePrice)}>{`${currencyFormat(
                  _.sum(
                    Object.values(JSON.parse(localStorage['total'])[roomLocal]).map((choice) => {
                      return choice?.price;
                    }),
                  ),
                )} ₸`}</span>
              </li>
            ))}
          </ul>
        )}

        <div className={clsx(styles.totalPackageTotal)}>
          <span className={clsx(styles.totalPackageTotalLabel)}>Итого</span>
          <span className={clsx(styles.totalPackageTotalPrice)}>{`${currencyFormat(
            _.sum(
              Object.values(JSON.parse(localStorage['total'])).map((choice) => {
                if (choice) {
                  return _.sumBy(Object.values(choice), function (o) {
                    return o?.price;
                  });
                }
              }),
            ),
          )} ₸`}</span>
        </div>
      </div>
    </>
  );
};

export default TotalSidebar;
