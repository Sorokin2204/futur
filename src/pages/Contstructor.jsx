import React from 'react';
import clsx from 'clsx';
import ConstructorHead from '../components/constructor/ConstructorHead.jsx/ConstructorHead';
import ConstructorInfo from '../components/constructor/ConstructorInfo/ConstructorInfo';
import ConstructorPackages from '../components/constructor/ConstructorPackages/ConstructorPackages';
import ConstructorChoice from '../components/constructor/ConstructorChoice/ConstructorChoice';
const ConstructorPage = () => {
  return (
    <>
      <ConstructorHead />
      <ConstructorInfo />
      <ConstructorPackages />
      <ConstructorChoice />
    </>
  );
};

export default ConstructorPage;
