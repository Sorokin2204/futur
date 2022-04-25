import React from 'react';
import clsx from 'clsx';
import styles from './TotalRoomChoiceList.module.scss';
import TotalRoomChoiceItem from '../TotalRoomChoiceItem/TotalRoomChoiceItem';
import { totalRoomChoiceList } from '../../../data/list/totalRoomChoices';
const TotalRoomChoiceList = () => {
  return (
    <>
      <ul className={clsx(styles.roomChoiceList)}>
        {totalRoomChoiceList.map((roomChoice) => (
          <TotalRoomChoiceItem {...roomChoice} className={clsx(styles.roomChoiceItem)} />
        ))}
      </ul>
    </>
  );
};

export default TotalRoomChoiceList;
