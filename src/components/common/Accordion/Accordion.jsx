import React from 'react';
import clsx from 'clsx';
import styles from './Accordion.module.scss';
import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const Accordion = ({ title, text, className }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className={clsx(styles.accordion, className, isActive && styles.accordionActive)}>
        <div className={clsx(styles.accordionHead)} onClick={() => setIsActive(!isActive)}>
          {title}
        </div>
        <AnimateHeight duration={500} height={isActive ? 'auto' : 0}>
          <div className={clsx(styles.accordionContent)}>{text}</div>
        </AnimateHeight>
      </div>
    </>
  );
};

export default Accordion;
