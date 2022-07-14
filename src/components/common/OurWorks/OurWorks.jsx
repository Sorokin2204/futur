import React from 'react';
import clsx from 'clsx';
import styles from './OurWorks.module.scss';
import OurWorkItem from '../OurWorkItem/OurWorkItem';
import { ourWorks } from '../../../data/page/home';
import Title from '../Title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { getWorks } from '../../../redux/slices/workSlice';
import { useEffect } from 'react';
const OurWorks = ({ aboutPage }) => {
  const dispatch = useDispatch();

  const { data: works } = useSelector((state) => state.work);
  useEffect(() => {
    dispatch(getWorks());
  }, []);

  return (
    <>
      <section className={clsx(styles.ourWorks, aboutPage && styles.ourWorksAboutPage)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.ourWorksInner)}>
            <Title className={clsx(styles.ourWorksTitle)}>{ourWorks.title}</Title>
            <ul className={clsx(styles.ourWorksList)}>
              {works?.map((work) => (
                <li className={clsx(styles.ourWorksItem)}>
                  <OurWorkItem title={work.title} text={work.desc} img={work.img} path={work.slug} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWorks;
