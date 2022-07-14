import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './HomePackages.module.scss';
import OurWorkItem from '../OurWorkItem/OurWorkItem';
import { ourWorks } from '../../../data/page/home';
import Title from '../Title/Title';
import TitleBold from '../TitleBold/TitleBold';
import HomePackageItem from '../HomePackageItem/HomePackageItem';
import { useSelector } from 'react-redux';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';
const HomePackages = ({ aboutPage }) => {
  const { data } = useSelector((state) => state.package);
  // const imgItemsRef = useRef([]);
  // const titleItemsRef = useRef([]);
  // const descItemsRef = useRef([]);

  const packageBlockRef = useRef();
  const itemsRef = useRef([]);
  const titleRef = useRef();
  const descRef = useRef();

  useEffect(() => {
    if (data) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ duration: 0.3 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: packageBlockRef.current,
            start: 'top 80%',
          },
        })
        .fromTo(titleRef.current, { opacity: 0 }, { xPercent: 0, opacity: 1, delay: 0.5 })
        .fromTo(descRef.current, { opacity: 0 }, { xPercent: 0, opacity: 1 })
        .fromTo(itemsRef.current, { xPercent: -3, opacity: 0 }, { xPercent: 0, opacity: 1, stagger: 0.3 });
    }
  }, [data]);
  return (
    <>
      {data && (
        <section className={clsx(styles.ourWorks, aboutPage && styles.ourWorksAboutPage)} ref={packageBlockRef}>
          <div className={clsx(styles.container, 'container')}>
            <div className={clsx(styles.ourWorksInner)}>
              <TitleBold titleRef={titleRef} className={clsx(styles.ourWorksTitle)}>
                {'Пакеты ремонтов'}
              </TitleBold>
              <div className={clsx(styles.desc)} ref={descRef}>
                Готовые решения для вашей квартиры. Определите ваш бюджет и узнайте, что будет входить в стоимость ремонта
              </div>
              <ul className={clsx(styles.ourWorksList)}>
                {data.map((work, index) => (
                  <li className={clsx(styles.ourWorksItem)} ref={(e) => (itemsRef.current[index] = e)}>
                    <HomePackageItem title={work.title} text={work.desc} img={work.preview_image} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HomePackages;
