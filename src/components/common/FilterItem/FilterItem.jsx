import React from 'react';
import clsx from 'clsx';
import styles from './FilterItem.module.scss';
const FilterItem = ({ children, active, ...props }) => {
  return (
    <>
      <li className={clsx(styles.filterItem)}>
        <button className={clsx(styles.filterButton, active && styles.filterActive)} {...props}>
          {children}
        </button>
      </li>
    </>
  );
};

export default FilterItem;
