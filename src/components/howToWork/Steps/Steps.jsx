import React from 'react';
import clsx from 'clsx';
import styles from './Steps.module.scss';
import { howToWork } from '../../../data/page/howToWork';
import Title from '../../common/Title/Title';
const Steps = () => {
  return (
    <>
      <section className={clsx(styles.steps)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.stepsInner)}>
            <Title className={clsx(styles.stepsTitle)}>{howToWork.title}</Title>
            <ul className={clsx(styles.stepsList)}>
              {howToWork.list.map((item, index) => (
                <li className={clsx(styles.stepsItem)} data-counter={`0${index + 1}`}>
                  <span className={clsx(styles.stepsName)}>{item.name}</span>
                  <p className={clsx(styles.stepsText)}>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Steps;
