import React from 'react';
import clsx from 'clsx';
import styles from './Select.module.scss';
const Select = ({ className }) => {
  return (
    <>
      <div className={clsx(styles.select, className)}>Выберите комнат</div>
    </>
  );
};

export default Select;
