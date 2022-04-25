import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ConstructorWindow.module.scss';
import ButtonWindow from '../../common/ButtonWindow/ButtonWindow';
import SelectWindow from '../../common/SelectWindow/SelectWindow';
import SwitchWindow from '../../common/SwitchWindow/SwitchWindow';
import AngleWindow from '../../common/AngleWindow/AngleWindow';
import { constructorMain } from '../../../data/page/constructor';
import ModalGoBack from '../../common/ModalGoBack/ModalGoBack';
import RoomPoint from '../../common/RoomPoint/RoomPoint';
const ConstructorWindow = ({ className }) => {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <>
      <div
        className={clsx(styles.window, className)}
        style={{
          backgroundImage: `url(${constructorMain.rooms[0].img})`,
        }}>
        <ul className={clsx(styles.windowRoomPointList)}>
          {constructorMain.rooms[0].furnitures.map((furniture) => (
            <li className={clsx(styles.windowRoomPointItem)}>
              <RoomPoint className={clsx(styles.windowRoomPointRadio)} label={furniture.name} value={furniture.slug} x={furniture.position.x} y={furniture.position.y} />
            </li>
          ))}
        </ul>
        <ButtonWindow
          className={clsx(styles.windowBtnBack)}
          onClick={() => {
            setActiveModal(true);
          }}
        />
        <SelectWindow className={clsx(styles.windowSelectPackages)} />
        <SwitchWindow className={clsx(styles.windowSwithFurniture)} />
        <AngleWindow className={clsx(styles.windowAngle)} />
        <ButtonWindow className={clsx(styles.windowFullScreen)} />
        {activeModal && <ModalGoBack onClose={() => setActiveModal(false)} />}
      </div>
    </>
  );
};

export default ConstructorWindow;
