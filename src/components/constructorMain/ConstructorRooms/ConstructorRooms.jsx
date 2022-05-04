import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './ConstructorRooms.module.scss';
import { roomList } from '../../../data/list/rooms';
import { getDefaultOptions, getRoomSingle, resetRoomSingle, roomDetailsSelector, setActiveRoom } from '../../../redux/slices/roomSingleSlice';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
const ConstructorRooms = ({ className }) => {
  // const [activeRoom, setActiveRoom] = useState({ slug: JSON.parse(localStorage['rooms'])[0].slug });

  const { details, activePackage, activeRoom, data: roomSingle, loading: loadingRoomSingle, error: errorRoomSingle } = useSelector((state) => state.roomSingle);
  const dispatch = useDispatch();
  // USE_EFFECTS

  useEffect(() => {
    dispatch(setActiveRoom({ ...JSON.parse(localStorage['rooms'])[0] }));
  }, []);

  useEffect(() => {
    if (activePackage) {
      // const roomsFromStorage = [...new Set(Object.values(JSON.parse(localStorage['rooms'])).map((room) => room.parent ?? room.slug))];
      // dispatch(getDefaultOptions({ room: roomsFromStorage, tariff: activePackage }));
      dispatch(setActiveRoom({ ...JSON.parse(localStorage['rooms'])[0] }));
    }
  }, [activePackage]);

  // useEffect(() => {
  //   if (activePackage && roomSingle) {
  //     const roomsFromStorage = [...new Set(Object.values(JSON.parse(localStorage['rooms'])).map((room) => room.parent ?? room.slug))];
  //     dispatch(getDefaultOptions({ room: roomsFromStorage, tariff: activePackage }));
  //   }
  // }, [activePackage, roomSingle]);

  useEffect(() => {
    if (activePackage) {
      dispatch(getRoomSingle({ room: activeRoom.parent ? activeRoom.parent : activeRoom.slug, package: activePackage.value }));
    }
  }, [activeRoom]);

  return (
    <>
      <div className={clsx(styles.rooms, className)}>
        <ul className={clsx(styles.roomsList)}>
          {Object.values(JSON.parse(localStorage['rooms'])).map((room, index) => {
            return (
              <li className={clsx(styles.roomsItem)}>
                <button className={clsx(styles.roomsButton, activeRoom?.slug === room.slug && styles.roomsButtonActive)} onClick={() => dispatch(setActiveRoom(room))}>
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
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ConstructorRooms;
