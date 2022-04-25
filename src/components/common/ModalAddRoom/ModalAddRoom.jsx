import React from 'react';
import clsx from 'clsx';
import styles from './ModalAddRoom.module.scss';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Select from '../Select/Select';
const ModalAddRoom = ({ onClose }) => {
  return (
    <>
      <Modal title="Добавить еще одну комнату" withCloseBtn onClose={onClose} className={clsx(styles.addRoomModal)}>
        <div className={clsx(styles.addRoom)}>
          <span className={clsx(styles.addRoomTitle)}>Добавить комнату</span>
          <Select className={clsx(styles.addRoomSelect)} />
          <div className={clsx(styles.addRoomBtnBox)}>
            <Button className={clsx(styles.addRoomBtnCancel)} smallOutline>
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
