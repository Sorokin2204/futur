import React from 'react';
import clsx from 'clsx';
import styles from './ConstructorMainContent.module.scss';
import ConstructorWindow from '../ConstructorWindow/ConstructorWindow';
import ConstructorHead from '../ConstructorHead/ConstructorHead';
import ConstructorTotal from '../ConstructorTotal/ConstructorTotal';
import ConstructorAccordions from '../ConstructorAccordions/ConstructorAccordions';
import ConstructorRooms from '../ConstructorRooms/ConstructorRooms';

const ConstructorMainContent = () => {
  return (
    <>
      <div className={clsx(styles.wrapper)}>
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
