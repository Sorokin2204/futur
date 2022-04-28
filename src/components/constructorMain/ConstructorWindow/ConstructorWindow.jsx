import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './ConstructorWindow.module.scss';
import ButtonWindow from '../../common/ButtonWindow/ButtonWindow';
import SelectWindow from '../../common/SelectWindow/SelectWindow';
import SwitchWindow from '../../common/SwitchWindow/SwitchWindow';
import AngleWindow from '../../common/AngleWindow/AngleWindow';
import { constructorMain } from '../../../data/page/constructor';
import ModalGoBack from '../../common/ModalGoBack/ModalGoBack';
import RoomPoint from '../../common/RoomPoint/RoomPoint';
import { roomList } from '../../../data/list/rooms';
import { packageList } from '../../../data/list/packages';
const ConstructorWindow = ({ className }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [windowRooms, setWindowRooms] = useState([]);
  const [windowPackages, setWindowPackages] = useState([]);
  useEffect(() => {
    let newWindowRooms = [];
    let newWindowPackages = [];
    roomList.map((room) => {
      newWindowRooms.push({
        label: room.name,
        value: room.slug,
        icon: room.icon,
      });
    });

    packageList.map((packagee) => {
      newWindowPackages.push({
        label: packagee.name,
        value: packagee.name,
        price: packagee.price,
      });
    });

    setWindowRooms(newWindowRooms);
    setWindowPackages(newWindowPackages);
    console.log(newWindowRooms);
    console.log(newWindowPackages);
  }, []);
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
        {windowPackages.length !== 0 && <SelectWindow package options={windowPackages} className={clsx(styles.windowSelectPackages)} />}

        {windowRooms.length !== 0 && <SelectWindow options={windowRooms} name={'window-rooms'} className={clsx(styles.windowSelectRooms)} room />}

        <SwitchWindow className={clsx(styles.windowSwithFurniture)} />
        <AngleWindow className={clsx(styles.windowAngle)} />
        <ButtonWindow className={clsx(styles.windowFullScreen)} />
        {activeModal && <ModalGoBack onClose={() => setActiveModal(false)} />}
      </div>
    </>
  );
};

export default ConstructorWindow;
