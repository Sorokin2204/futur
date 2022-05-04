import React from 'react';
import clsx from 'clsx';
import styles from './SwitchWindow.module.scss';
import { generateRandomString } from '../../../utils/generateRandomString';
import { useDispatch, useSelector } from 'react-redux';
import { switchFurniture } from '../../../redux/slices/roomSingleSlice';
const SwitchWindow = ({ className }) => {
  const randomId = generateRandomString(5);
  const dispatch = useDispatch();
  const { showFurniture } = useSelector((state) => state.roomSingle);
  return (
    <>
      <label htmlFor={randomId} className={clsx(styles.switchLabel, className)}>
        <input
          id={randomId}
          type="checkbox"
          onClick={() => {
            dispatch(switchFurniture());
          }}
          className={clsx(styles.switchInput)}
          defaultChecked={showFurniture}
        />
        <span className={clsx(styles.switchText)}>Посмотреть с мебелью</span>
      </label>
    </>
  );
};

export default SwitchWindow;
