import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ConstructorAccordionWindow.module.scss';
import AccordionWindow from '../../common/AccordionWindow/AccordionWindow';
import AccordionItemWindow from '../../common/AccordionItemWindow/AccordionItemWindow';
import ConstructorAccordionsGroup from '../ConstructorAccordionsGroup/ConstructorAccordionsGroup';
const ConstructorAccordionWindow = ({ name, slug, list }) => {
  return (
    <>
      <AccordionWindow slug={slug} title={name}>
        {Array.from(list, ([key, value]) => (
          <ConstructorAccordionsGroup group={key} options={value} />
        ))}
      </AccordionWindow>
    </>
  );
};

export default ConstructorAccordionWindow;
