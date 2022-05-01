import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './Select.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveRoom } from '../../../redux/slices/roomSlice';
import useOutsideAlerter from '../../../utils/useOutsideAlerter';
const Select = ({ className, name, options }) => {
  const { selectedRoom } = useSelector((state) => state.room);
  const dispatch = useDispatch();
  const [openSelect, setOpenSelect] = useState(false);
  const wrapperRef = useRef(null);
  const onCloseSelect = () => {
    setOpenSelect(false);
  };
  useOutsideAlerter(wrapperRef, onCloseSelect);
  return (
    <>
      <div className={clsx(styles.select)} ref={wrapperRef}>
        <select className={clsx(styles.selectNative)} name={name} value={selectedRoom.slug}>
          <option disabled selected value={''}>
            Выберите комнату
          </option>
          {options?.map((option) => {
            if (!option.show) return <option value={option.slug}>{option.name}</option>;
          })}
        </select>
        <div className={clsx(styles.selectBox)}>
          <div className={clsx(styles.selectCustom, className, openSelect && styles.selectCustomActive, selectedRoom.slug && styles.selectCustomSelected)} onClick={() => setOpenSelect(!openSelect)}>
            {selectedRoom.name}
          </div>
          <ul className={clsx(styles.selectOptionList, openSelect && styles.selectOptionListOpen)}>
            {options?.map((option) => {
              if (!option.show)
                return (
                  <li
                    className={clsx(styles.selectOptionItem, selectedRoom.slug === option.slug && styles.selectOptionItemActive)}
                    onClick={() => {
                      dispatch(setActiveRoom(option));
                      setOpenSelect(false);
                    }}>
                    {option.name}
                  </li>
                );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Select;
