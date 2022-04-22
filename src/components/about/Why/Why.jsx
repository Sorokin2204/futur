import React from 'react';
import clsx from 'clsx';
import styles from './Why.module.scss';
import { why } from '../../../data/page/about';
import Title from '../../common/Title/Title';
const AboutWhy = () => {
  return (
    <>
      <section className={clsx(styles.why)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.whyInner)}>
            <Title className={clsx(styles.whyTitle)}>{why.title}</Title>
            <ul className={clsx(styles.whyList)}>
              {why.list.map((whyItem) => (
                <li className={clsx(styles.whyItem)}>
                  <img src={whyItem.icon} alt="" className={clsx(styles.whyItemIcon)} />
                  <span className={clsx(styles.whyItemTitle)}>{whyItem.name}</span>
                  <p className={clsx(styles.whyItemText)}>{whyItem.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutWhy;
