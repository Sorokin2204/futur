import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ConstructorInfo.module.scss';
import Input from '../../common/Input/Input';
import Counter from '../../common/Counter/Counter';
import Checkbox from '../../common/Checkbox/Checkbox';
import Button from '../../common/Button/Button';
import { roomList } from '../../../data/list/rooms';
import Modal from '../../common/Modal/Modal';
import ModalAddRoom from '../../common/ModalAddRoom/ModalAddRoom';
const ConstructorInfo = () => {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <>
      <div className={clsx(styles.info)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.infoInner)}>
            <h3 className={clsx(styles.infoTitle)}>Заполните информацию</h3>
            <div className={clsx(styles.infoCommon)}>
              <Input className={clsx(styles.infoInputArea)} label="Площадь, м²" placeholder="м²" />
              <Counter className={clsx(styles.infoCounterDoors)} label="Кол-во дверей" />
              <Counter className={clsx(styles.infoCounterBathRooms)} label="Кол-во санузлов" />
            </div>
            <ul className={clsx(styles.infoRoomList)}>
              {roomList.map((room) => (
                <li className={clsx(styles.infoRoomItem)}>
                  <Checkbox className={clsx(styles.infoRoomCheckbox)} label={room.name} icon={room.icon} />
                </li>
              ))}
            </ul>
            <Button className={clsx(styles.infoBtnAddRoom)} icon={'/icons/plus.svg'} onClick={() => setActiveModal(true)}>
              Добавить еще одну комнату
            </Button>
            <Checkbox className={clsx(styles.infoCheckboxWall)} label="Нужно возвести стены"></Checkbox>
            <Checkbox className={clsx(styles.infoCheckboxSecondaryHome)} label="Вторичное жельё, нужен демонтаж"></Checkbox>
          </div>
        </div>
        {activeModal && <ModalAddRoom onClose={() => setActiveModal(false)} />}
      </div>
    </>
  );
};

export default ConstructorInfo;
