import React from 'react';
import clsx from 'clsx';
import styles from './TotalContent.module.scss';
import Button from '../../common/Button/Button';
import TotalRoomChoiceList from '../TotalRoomChoiceList/TotalRoomChoiceList';
import TotalSidebar from '../TotalSidebar/TotalSidebar';
import TotalFooter from '../TotalFooter/TotalFooter';
import { useNavigate } from 'react-router';
const TotalContent = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className={clsx(styles.totalWrapper)}>
          <Button className={clsx(styles.totalBtnBack)} icon="/icons/chevron-left.svg" onClick={() => navigate('/constructor/123')}>
            Вернуться к конструктору
          </Button>
          <TotalRoomChoiceList className={clsx(styles.totalRoomChoiceList)} />
          <TotalSidebar className={clsx(styles.totalSidebar)} />
        </div>
      </div>
      <TotalFooter className={clsx(styles.totalFooter)} />
    </>
  );
};

export default TotalContent;
