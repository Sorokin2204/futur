import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './Select.module.scss';
const Select = ({ className, name, options }) => {
  const [openSelect, setOpenSelect] = useState(false);
  const [activeOption, setActiveOption] = useState({
    label: 'Выберите комнату',
    value: '',
  });
  return (
    <>
      <div className={clsx(styles.select)}>
        <select className={clsx(styles.selectNative)} name={name} value={activeOption.value}>
          <option disabled selected value={''}>
            Выберите комнату
          </option>
          {options?.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
        <div className={clsx(styles.selectBox)}>
          <div className={clsx(styles.selectCustom, className, openSelect && styles.selectCustomActive, activeOption.value && styles.selectCustomSelected)} onClick={() => setOpenSelect(!openSelect)}>
            {activeOption.label}
          </div>
          <ul className={clsx(styles.selectOptionList, openSelect && styles.selectOptionListOpen)}>
            {options?.map((option) => (
              <li
                className={clsx(styles.selectOptionItem, activeOption.value === option.value && styles.selectOptionItemActive)}
                onClick={() => {
                  setActiveOption(option);
                  setOpenSelect(false);
                }}>
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Select;
