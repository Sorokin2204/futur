import React from 'react';
import clsx from 'clsx';
import styles from './TotalRoomChoiceItem.module.scss';
const TotalRoomChoiceItem = ({ name, options, className }) => {
  return (
    <>
      <li className={clsx(styles.roomChoice, className)}>
        <h3 className={clsx(styles.roomChoiceTitle)}>{name}</h3>
        <ul className={clsx(styles.roomChoiceList)}>
          {options.map((item) => (
            <li className={clsx(styles.roomChoiceItem)}>
              <img src={item.previewImg} alt="" className={clsx(styles.roomChoiceItemImg)} />
              <span className={clsx(styles.roomChoiceItemName)}>{item.name}</span>
              <p className={clsx(styles.roomChoiceItemDesc)}>{item.desc}</p>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
};

export default TotalRoomChoiceItem;
