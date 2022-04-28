import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './ModalAddRoom.module.scss';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Select from '../Select/Select';
import { roomList } from '../../../data/list/rooms';
const ModalAddRoom = ({ onClose }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    let newRooms = [];

    roomList.map((room) => {
      [...Array(3)].map((val, i) => {
        newRooms.push({
          label: `${room.name} №${i + 2}`,
          value: `${room.slug}_${i + 2}`,
        });
      });
    });
    setRooms(newRooms);
  }, []);

  return (
    <>
      <Modal title="Добавить еще одну комнату" bigTitle onClose={onClose} className={clsx(styles.addRoomModal)}>
        <div className={clsx(styles.addRoom)}>
          <span className={clsx(styles.addRoomTitle)}>Добавить комнату</span>
          <Select className={clsx(styles.addRoomSelect)} name="new-room" options={rooms} />

          <div className={clsx(styles.addRoomBtnBox)}>
            <Button className={clsx(styles.addRoomBtnCancel)} smallOutline onClick={() => onClose()}>
              Отмена
            </Button>
            <Button className={clsx(styles.addRoomBtnAdd)} small>
              Добавить
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalAddRoom;
