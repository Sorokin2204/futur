import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './ModalAddRoom.module.scss';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Select from '../Select/Select';
import { roomList } from '../../../data/list/rooms';
import { useDispatch, useSelector } from 'react-redux';
import { showAddedRoom } from '../../../redux/slices/roomSlice';
import { closeAllModal } from '../../../redux/slices/modalsSlice';
const ModalAddRoom = ({ onClose }) => {
  const { data: rooms, loading: loadingRooms, error: errorRooms } = useSelector((state) => state.room);
  const dispath = useDispatch();
  // const [rooms, setRooms] = useState([]);

  // useEffect(() => {
  //   let newRooms = [];

  //   roomList.map((room) => {
  //     [...Array(3)].map((val, i) => {
  //       newRooms.push({
  //         label: `${room.name} №${i + 2}`,
  //         value: `${room.slug}_${i + 2}`,
  //       });
  //     });
  //   });
  //   setRooms(newRooms);
  // }, []);

  return (
    <>
      <Modal title="Добавить еще одну комнату" onAfterClose={() => {}} bigTitle className={clsx(styles.addRoomModal)}>
        <div className={clsx(styles.addRoom)}>
          <span className={clsx(styles.addRoomTitle)}>Добавить комнату</span>
          {!loadingRooms && rooms && <Select className={clsx(styles.addRoomSelect)} name="new-room" options={rooms} />}

          <div className={clsx(styles.addRoomBtnBox)}>
            <Button className={clsx(styles.addRoomBtnCancel)} smallOutline onClick={() => dispath(closeAllModal())}>
              Отмена
            </Button>
            <Button
              className={clsx(styles.addRoomBtnAdd)}
              small
              onClick={() => {
                dispath(showAddedRoom());
                dispath(closeAllModal());
              }}>
              Добавить
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalAddRoom;
