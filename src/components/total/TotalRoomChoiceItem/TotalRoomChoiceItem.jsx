import React from 'react';
import clsx from 'clsx';
import styles from './TotalRoomChoiceItem.module.scss';
import env from 'react-dotenv';
const TotalRoomChoiceItem = ({ name, options, className }) => {
  return (
    <>
      <li className={clsx(styles.roomChoice, className)}>
        <h3 className={clsx(styles.roomChoiceTitle)}>{name}</h3>
        <ul className={clsx(styles.roomChoiceList)}>
          {options.map((item) => (
            <li className={clsx(styles.roomChoiceItem)}>
              <img src={env.SERVER_URL + item.preview_image} alt="" className={clsx(styles.roomChoiceItemImg)} />
              <span className={clsx(styles.roomChoiceItemName)}>{item.title}</span>
              <p className={clsx(styles.roomChoiceItemDesc)}>{item.desc}</p>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
};

export default TotalRoomChoiceItem;
