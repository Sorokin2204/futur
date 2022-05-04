import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './SelectWindow.module.scss';
import { currencyFormat } from '../../../utils/currencyFormat';
import useOutsideAlerter from '../../../utils/useOutsideAlerter';
import { setActivePackage, setActiveRoom } from '../../../redux/slices/roomSingleSlice';
import { useDispatch, useSelector } from 'react-redux';
const SelectWindow = ({ className, room, name, options }) => {
  const { activePackage, activeRoom } = useSelector((state) => state.roomSingle);
  const dispatch = useDispatch();
  const [activeOption, setActiveOption] = useState(null);
  const [openSelect, setOpenSelect] = useState(false);
  const wrapperRef = useRef(null);
  const onCloseSelect = () => {
    setOpenSelect(false);
  };
  useOutsideAlerter(wrapperRef, onCloseSelect);

  useEffect(() => {
    if (room) {
    } else {
      const findPackage = options.find((option) => option.value === localStorage['package']);
      dispatch(setActivePackage(findPackage ?? options[0]));
    }
  }, []);

  useEffect(() => {
    if (room) {
      setActiveOption({ label: activeRoom.name, icon: activeRoom.icon, value: activeRoom.slug });
    } else {
      setActiveOption(activePackage);
    }
  }, [activePackage, activeRoom]);

  return (
    <>
      <div ref={wrapperRef} className={clsx(styles.select, className)}>
        <select className={clsx(styles.selectNative)} name={name} value={activeOption?.value}>
          {options?.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <div className={clsx(styles.selectBox)}>
          <div className={clsx(styles.selectCustom, openSelect && styles.selectCustomActive)} onClick={() => setOpenSelect(!openSelect)}>
            {room ? (
              <div className={clsx(styles.selectRoom)}>
                <div style={{ WebkitMaskImage: `url(${activeOption?.icon} )` }} className={clsx(styles.selectRoomIcon)} />
                <div className={clsx(styles.selectRoomName)}>{activeOption?.label} </div>
              </div>
            ) : (
              <>
                <div className={clsx(styles.selectPackage)}>
                  <div className={clsx(styles.selectPackageName)}>{activeOption?.label}</div>
                  <div className={clsx(styles.selectPackagePrice)}>{`${currencyFormat(activeOption?.price)} ₸/м²`}</div>
                </div>
              </>
            )}
          </div>
          <ul className={clsx(styles.selectOptionList, openSelect && styles.selectOptionListOpen)}>
            {options?.map((option) => {
              if (option.value !== activeOption?.value)
                return (
                  <li
                    className={clsx(styles.selectOptionItem)}
                    onClick={() => {
                      if (room) {
                        dispatch(setActiveRoom({ name: option.label, slug: option.value, icon: option.icon, parent: option.parent }));
                      } else {
                        dispatch(setActivePackage(option));
                      }
                      setOpenSelect(false);
                    }}>
                    {room ? (
                      <div className={clsx(styles.selectRoom)}>
                        <div style={{ WebkitMaskImage: `url(${option.icon} )` }} className={clsx(styles.selectRoomIcon)} />
                        <div className={clsx(styles.selectRoomName)}>{option.label} </div>
                      </div>
                    ) : (
                      <>
                        <div className={clsx(styles.selectPackage)}>
                          <div className={clsx(styles.selectPackageName)}>{option.label}</div>
                          <div className={clsx(styles.selectPackagePrice)}>{`${currencyFormat(option.price)} ₸/м²`}</div>
                        </div>
                      </>
                    )}
                  </li>
                );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SelectWindow;
