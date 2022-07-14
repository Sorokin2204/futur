import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './Steps.module.scss';
import { howToWork } from '../../../data/page/howToWork';
import Title from '../../common/Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { getHowToWork } from '../../../redux/slices/howToWorkSlice';
const Steps = () => {
  const { data, loading } = useSelector((state) => state.howToWork);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHowToWork());
  }, []);

  return (
    <>
      <section className={clsx(styles.steps)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.stepsInner)}>
            <Title className={clsx(styles.stepsTitle)}>{howToWork.title}</Title>
            <ul className={clsx(styles.stepsList)}>
              {data?.map((item, index) => (
                <li className={clsx(styles.stepsItem)} data-counter={`0${index + 1}`}>
                  <span className={clsx(styles.stepsName)}>{item.title}</span>
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
