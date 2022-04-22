import React from 'react';
import clsx from 'clsx';
import styles from './OurWorks.module.scss';
import OurWorkItem from '../OurWorkItem/OurWorkItem';
import { ourWorks } from '../../../data/page/home';
import Title from '../Title/Title';
const OurWorks = ({ aboutPage }) => {
  return (
    <>
      <section className={clsx(styles.ourWorks, aboutPage && styles.ourWorksAboutPage)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.ourWorksInner)}>
            <Title className={clsx(styles.ourWorksTitle)}>{ourWorks.title}</Title>
            <ul className={clsx(styles.ourWorksList)}>
              {ourWorks.list.map((work) => (
                <li className={clsx(styles.ourWorksItem)}>
                  <OurWorkItem title={work.title} text={work.text} img={work.img} path={work.path} />
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
