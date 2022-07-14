import React from 'react';
import clsx from 'clsx';
import styles from './TitleBold.module.scss';
const TitleBold = ({ children, className, titleRef }) => {
  return (
    <h2 className={clsx(styles.title, className)} ref={titleRef}>
      {children}
    </h2>
  );
};

export default TitleBold;
