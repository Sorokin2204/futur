import React from 'react';
import clsx from 'clsx';
import styles from './TotalRoomChoiceList.module.scss';
import TotalRoomChoiceItem from '../TotalRoomChoiceItem/TotalRoomChoiceItem';
import { totalRoomChoiceList } from '../../../data/list/totalRoomChoices';
import { useSelector } from 'react-redux';
const TotalRoomChoiceList = () => {
  const { totalRooms } = useSelector((state) => state.total);
  return (
    <>
      <ul className={clsx(styles.roomChoiceList)}>{totalRooms && totalRooms?.map((roomChoice) => <TotalRoomChoiceItem {...roomChoice} className={clsx(styles.roomChoiceItem)} />)}</ul>
    </>
  );
};

export default TotalRoomChoiceList;
