import React, { useEffect, useMemo, useState } from 'react';
import clsx from 'clsx';
import styles from './ConstructorInfo.module.scss';
import Input from '../../common/Input/Input';
import Counter from '../../common/Counter/Counter';
import Checkbox from '../../common/Checkbox/Checkbox';
import Button from '../../common/Button/Button';
import { roomList } from '../../../data/list/rooms';
import Modal from '../../common/Modal/Modal';
import ModalAddRoom from '../../common/ModalAddRoom/ModalAddRoom';
import { useDispatch, useSelector } from 'react-redux';
import { useFieldArray } from 'react-hook-form';
import { openModalAddRoom } from '../../../redux/slices/modalsSlice';
import { checkedRoom } from '../../../redux/slices/roomSlice';
const ConstructorInfo = ({ form }) => {
  const { data: rooms, loading: loadingRooms, error: errorRooms } = useSelector((state) => state.room);
  const dispatch = useDispatch();
  const {
    register,
    control,
    setValue,
    watch,
    formState: { errors },
  } = form;
  const watchHouseType = watch('houseType');
  return (
    <>
      <div className={clsx(styles.info)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.infoInner)}>
            <h3 className={clsx(styles.infoTitle)}>Заполните информацию</h3>
            <div className={clsx(styles.infoCommon)}>
              <Input
                rules={{
                  required: true,
                }}
                error={errors.area}
                register={register}
                name="area"
                type="number"
                control={control}
                responsive
                className={clsx(styles.infoInputArea)}
                label="Площадь, м²"
                placeholder="м²"
              />
              {watchHouseType === 'chastny_dom' && (
                <Input
                  rules={{
                    required: true,
                  }}
                  error={errors.ceilingHeight}
                  register={register}
                  name="ceilingHeight"
                  type="number"
                  control={control}
                  responsive
                  className={clsx(styles.infoInputArea)}
                  label="Высота потолков"
                  placeholder="м"
                />
              )}

              <Counter watch={watch} setValue={setValue} register={register} name="doorsQuantity" className={clsx(styles.infoCounterDoors)} label="Кол-во дверей" />
              <Counter watch={watch} setValue={setValue} register={register} name="bathroomsQuantity" className={clsx(styles.infoCounterBathRooms)} label="Кол-во санузлов" />
            </div>
            <ul className={clsx(styles.infoRoomList)}>
              {!loadingRooms &&
                rooms &&
                rooms.map((room) => {
                  if (room.show)
                    return (
                      <li className={clsx(styles.infoRoomItem)}>
                        <Checkbox
                          onChange={(e) => {
                            dispatch(checkedRoom(room));
                          }}
                          className={clsx(styles.infoRoomCheckbox)}
                          label={room.name}
                          icon={room.icon}
                          checked={room.checked}
                        />
                      </li>
                    );
                })}
            </ul>
            <Button className={clsx(styles.infoBtnAddRoom)} icon={'/icons/plus.svg'} onClick={() => dispatch(openModalAddRoom())}>
              Добавить еще одну комнату
            </Button>
            <Checkbox register={register} name="isBuildWalls" className={clsx(styles.infoCheckboxWall)} label="Нужно возвести стены"></Checkbox>
            <Checkbox register={register} name="isNeedDismantling" className={clsx(styles.infoCheckboxSecondaryHome)} label="Вторичное жельё, нужен демонтаж"></Checkbox>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstructorInfo;
