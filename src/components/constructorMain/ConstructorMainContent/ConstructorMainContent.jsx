import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './ConstructorMainContent.module.scss';
import ConstructorWindow from '../ConstructorWindow/ConstructorWindow';
import ConstructorHead from '../ConstructorHead/ConstructorHead';
import ConstructorTotal from '../ConstructorTotal/ConstructorTotal';
import ConstructorAccordions from '../ConstructorAccordions/ConstructorAccordions';
import ConstructorRooms from '../ConstructorRooms/ConstructorRooms';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const ConstructorMainContent = () => {
  const { fullScreen } = useSelector((state) => state.roomSingle);
  return (
    <>
      <div className={clsx(styles.wrapper, fullScreen && styles.wrapperFullScreen)}>
        <ConstructorWindow className={clsx(styles.window)} />
        <ConstructorRooms className={clsx(styles.rooms)} />
        <ConstructorHead className={clsx(styles.head)} />
        <ConstructorAccordions className={clsx(styles.accordions)} />
        <ConstructorTotal className={clsx(styles.total)} />
      </div>
    </>
  );
};

export default ConstructorMainContent;
