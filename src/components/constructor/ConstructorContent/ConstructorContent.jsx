import React from 'react';
import clsx from 'clsx';
import styles from './ConstructorContent.module.scss';
import ConstructorHead from '../ConstructorHead.jsx/ConstructorHead';
import ConstructorInfo from '../ConstructorInfo/ConstructorInfo';
import ConstructorPackages from '../ConstructorPackages/ConstructorPackages';
import ConstructorChoice from '../ConstructorChoice/ConstructorChoice';
const ConstructorContent = () => {
  return (
    <>
      <div className={clsx(styles.wrapper)}>
        <ConstructorHead />
        <ConstructorInfo />
        <ConstructorPackages />
        <ConstructorChoice />
      </div>
    </>
  );
};

export default ConstructorContent;
