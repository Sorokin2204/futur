import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './Filter.module.scss';
import _ from 'lodash';
const Filter = ({ children, className }) => {
  return (
    <>
      <ul className={clsx(styles.filter, className)}>{children}</ul>
    </>
  );
};

export default Filter;
