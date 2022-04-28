import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './SelectWindow.module.scss';
import { currencyFormat } from '../../../utils/currencyFormat';
import useOutsideAlerter from '../../../utils/useOutsideAlerter';
const SelectWindow = ({ className, room, name, options }) => {
  const [openSelect, setOpenSelect] = useState(false);
  const [activeOption, setActiveOption] = useState(options[0]);
  const wrapperRef = useRef(null);
  const onCloseSelect = () => {
    setOpenSelect(false);
  };
  useOutsideAlerter(wrapperRef, onCloseSelect);
  return (
    <>
      <div ref={wrapperRef} className={clsx(styles.select, className)}>
        <select className={clsx(styles.selectNative)} name={name} value={activeOption.value}>
          <option disabled selected value={''}>
            Выберите комнату
          </option>
          {options?.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <div className={clsx(styles.selectBox)}>
          <div className={clsx(styles.selectCustom, openSelect && styles.selectCustomActive)} onClick={() => setOpenSelect(!openSelect)}>
            {room ? (
              <div className={clsx(styles.selectRoom)}>
                <div style={{ WebkitMaskImage: `url(${activeOption.icon} )` }} className={clsx(styles.selectRoomIcon)} />
                <div className={clsx(styles.selectRoomName)}>{activeOption.label} </div>
              </div>
            ) : (
              <>
                <div className={clsx(styles.selectPackage)}>
                  <div className={clsx(styles.selectPackageName)}>{activeOption.label}</div>
                  <div className={clsx(styles.selectPackagePrice)}>{`${currencyFormat(activeOption.price)} ₸/м²`}</div>
                </div>
              </>
            )}
          </div>
          <ul className={clsx(styles.selectOptionList, openSelect && styles.selectOptionListOpen)}>
            {options?.map((option) => {
              if (option.value !== activeOption.value)
                return (
                  <li
                    className={clsx(styles.selectOptionItem)}
                    onClick={() => {
                      setActiveOption(option);
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
