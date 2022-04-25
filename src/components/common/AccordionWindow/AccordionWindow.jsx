import React from 'react';
import clsx from 'clsx';
import styles from './AccordionWindow.module.scss';
import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const AccordionWindow = ({ title, children, className }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className={clsx(styles.accordion, className, isActive && styles.accordionActive)}>
        <div className={clsx(styles.accordionHead)} onClick={() => setIsActive(!isActive)}>
          {title}
        </div>
        <AnimateHeight duration={500} height={isActive ? 'auto' : 0}>
          <div className={clsx(styles.accordionContent)}>{children}</div>
        </AnimateHeight>
      </div>
    </>
  );
};

export default AccordionWindow;
