import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './AccordionWindow.module.scss';
import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { useSelector } from 'react-redux';

const AccordionWindow = ({ title, slug, children, className }) => {
  const { activeDetailPoint } = useSelector((state) => state.roomSingle);
  const [isActive, setIsActive] = useState(false);
  // const [animationHeight, setAnimationHeight] = useState(false);
  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

  useEffect(() => {
    if (activeDetailPoint?.slug === slug) {
      setIsActive(true);

      executeScroll();
    }
  }, [activeDetailPoint]);

  // useEffect(() => {
  //   if (isActive) executeScroll();
  // }, [animationHeight, isActive]);

  return (
    <>
      <div className={clsx(styles.accordion, className, isActive && styles.accordionActive)}>
        <div ref={myRef} className={clsx(styles.accordionHead)} onClick={() => setIsActive(!isActive)}>
          {title}
        </div>
        <AnimateHeight
          // onAnimationEnd={() => {
          //   setAnimationHeight(true);
          // }}
          // onAnimationStart={() => {
          //   setAnimationHeight(false);
          // }}
          duration={500}
          height={isActive ? 'auto' : 0}>
          <div className={clsx(styles.accordionContent)}>{children}</div>
        </AnimateHeight>
      </div>
    </>
  );
};

export default AccordionWindow;
