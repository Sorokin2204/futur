import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './Adv.module.scss';
import { advHome } from '../../../data/list/advHome';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';
const Adv = () => {
  const advItemsRef = useRef([]);
  const advBlockRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ duration: 0.3 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: advBlockRef.current,
          start: 'top 80%',
        },
      })
      .fromTo(advItemsRef.current, { xPercent: -15, opacity: 0 }, { xPercent: 0, opacity: 1, stagger: 0.3, delay: 0.7 });
  }, []);
  return (
    <>
      <div className={clsx(styles.adv)} ref={advBlockRef}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.inner)}>
            <ul className={clsx(styles.advList)}>
              {advHome.map((item, i) => (
                <li className={clsx(styles.advItem)} ref={(e) => (advItemsRef.current[i] = e)}>
                  <div className={clsx(styles.advItemHead)}>
                    <img src={item.icon} alt=" " className={clsx(styles.advItemImg)} />
                    <div className={clsx(styles.advItemTitle)}>{item.name}</div>
                  </div>
                  <div className={clsx(styles.advDesc)}>{item.text}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adv;
