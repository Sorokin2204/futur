import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './HomeSteps.module.scss';
import TitleBold from '../../common/TitleBold/TitleBold';
import { Interweave } from 'interweave';
import useMediaQuery from '../../../utils/useMediaQuery';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';
const steps = [
  {
    title: 'Ремонт под  любой бюджет',
    desc: `Встреча и знакомство
Наши дизайнер и технолог готовы встретить вас в офисе, либо  на объекте. Мы узнаем все ваши пожелания, ответим на вопросы по ремонту и составим предварительный план работ и смету.`,
  },
  {
    title: 'Дизайн и расчёты',
    desc: `Получив от всю информацию, наша команда подготовит дизайн проект с вашим участием. Выбирайте стили, материалы и цвета в зависимости от вашего пакета. В результате, мы с вами будем иметь чёткий план ремонта и точную смету`,
  },

  {
    title: 'Ремонтные работы и надзор',
    desc: `После подписания договора мы фиксируем цены и приступаем к ремонту. В ходе ремонта вам будут отправлять еженедельные отчёты, а дизайнер и технолог будут следить, чтобы ремонт соответствовал техническим нормам и задумке дизайн проекта`,
  },
  {
    title: 'Реализация проекта',
    desc: `После завершения ремонтных работ мы предоставляем услуги профессионального клининга и процесс приёма квартиры от заказчика. Берите свою мебель и технику и заезжайте в готовую квартиру`,
  },
];

const HomeSteps = () => {
  const stepsBlockRef = useRef();
  const itemsRef = useRef([]);
  const titleRef = useRef();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ duration: 0.3 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: stepsBlockRef.current,
          start: 'top 80%',
        },
      })
      .fromTo(stepsBlockRef.current, { opacity: 0 }, { xPercent: 0, opacity: 1, delay: 0.5 })
      .fromTo(titleRef.current, { opacity: 0 }, { xPercent: 0, opacity: 1 })
      .fromTo(itemsRef.current, { opacity: 0 }, { xPercent: 0, opacity: 1, stagger: 0.3, duration: 0.3 });
  }, []);
  const isMobile = useMediaQuery('(max-width: 1240px)');
  return (
    <>
      <div className={clsx(styles.steps)} ref={stepsBlockRef}>
        <div className={clsx(styles.container, 'container')}>
          <TitleBold titleRef={titleRef}>Как мы работаем</TitleBold>
          {!isMobile ? (
            <div className={clsx(styles.inner)}>
              {steps.map((step, i) => (
                <div className={clsx(styles.step, styles[`step${i + 1}`])} ref={(e) => (itemsRef.current[i] = e)}>
                  <div className={clsx(styles.stepItemTitle)}>{step.title}</div>
                  <Interweave content={step.desc} className={clsx(styles.stepItemDesc)} />

                  <div className={clsx(styles.stepItemNumber)}>{i + 1}</div>
                  <div className={clsx(styles.stepDot)}></div>
                </div>
              ))}
            </div>
          ) : (
            <div className={clsx(styles.innerMob)}>
              {steps.map((step, i) => (
                <div className={clsx(styles.stepMob, styles[`step${i + 1}`])}>
                  <div className={clsx(styles.stepItemTitleMob)}>{step.title}</div>
                  <Interweave content={step.desc} className={clsx(styles.stepItemDescMob)} />

                  <div className={clsx(styles.stepItemNumberMob)}>{i + 1}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HomeSteps;
