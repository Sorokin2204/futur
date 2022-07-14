import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './TotalContent.module.scss';
import Button from '../../common/Button/Button';
import TotalRoomChoiceList from '../TotalRoomChoiceList/TotalRoomChoiceList';
import TotalSidebar from '../TotalSidebar/TotalSidebar';
import TotalFooter from '../TotalFooter/TotalFooter';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getRooms } from '../../../redux/slices/roomSlice';
import { getPackages } from '../../../redux/slices/packageSlice';
import Loader from '../../common/Loader/Loader';
import { getTotals } from '../../../redux/slices/totalSlice';
const TotalContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading: loadingTotal } = useSelector((state) => state.total);
  const { loading: loadingRoom, data: rooms } = useSelector((state) => state.room);
  const { loading: loadingPackages } = useSelector((state) => state.package);
  useEffect(() => {
    dispatch(getRooms());
    dispatch(getPackages());
  }, []);
  useEffect(() => {
    if (rooms) {
      dispatch(getTotals({ rooms }));
    }
  }, [rooms]);

  return (
    <>
      {!loadingTotal && !loadingRoom && !loadingPackages ? (
        <>
          {' '}
          <div className="container">
            <div className={clsx(styles.totalWrapper)}>
              <Button className={clsx(styles.totalBtnBack)} icon="/icons/chevron-left.svg" onClick={() => navigate('/constructor')}>
                Вернуться к конструктору
              </Button>
              <TotalRoomChoiceList className={clsx(styles.totalRoomChoiceList)} />
              <TotalSidebar className={clsx(styles.totalSidebar)} />
            </div>
          </div>
          <TotalFooter className={clsx(styles.totalFooter)} />
        </>
      ) : (
        <Loader light />
      )}
    </>
  );
};

export default TotalContent;
