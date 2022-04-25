import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ConstructorRooms.module.scss';
import { roomList } from '../../../data/list/rooms';
const ConstructorRooms = ({ className }) => {
  const [activeRoom, setActiveRoom] = useState(null);
  return (
    <>
      <div className={clsx(styles.rooms, className)}>
        <ul className={clsx(styles.roomsList)}>
          {roomList.map((room, index) => {
            return index < 4 ? (
              <li className={clsx(styles.roomsItem)}>
                <button className={clsx(styles.roomsButton, activeRoom === room.name && styles.roomsButtonActive)} onClick={() => setActiveRoom(room.name)}>
                  <div
                    src={room.icon}
                    style={{
                      WebkitMaskImage: `url(${room.icon})`,
                    }}
                    className={clsx(styles.roomsButtonImg)}
                  />
                  {room.name}
                </button>
              </li>
            ) : (
              ''
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ConstructorRooms;
