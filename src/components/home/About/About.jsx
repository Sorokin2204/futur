import React from 'react';
import clsx from 'clsx';
import styles from './About.module.scss';
import { about } from '../../../data/page/home';
import Title from '../../common/Title/Title';
import Button from '../../common/Button/Button';
import { common } from '../../../data/common';
import { useNavigate } from 'react-router';
const HomeAbout = ({ aboutPage }) => {
  const navigate = useNavigate();
  return (
    <>
      <section className={clsx(styles.about, aboutPage && styles.aboutPage)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.aboutInner)}>
            {aboutPage ? <div className={clsx(styles.aboutPlanThree)} style={{ backgroundImage: `url(${common.planImgThree})` }}></div> : <div className={clsx(styles.aboutPlan)} style={{ backgroundImage: `url(${common.planImg})` }}></div>}

            <div className={clsx(styles.aboutContent)}>
              <Title className={clsx(styles.aboutTitle)}>{about.title}</Title>
              <p className={clsx(styles.aboutText)} dangerouslySetInnerHTML={{ __html: about.text }}></p>
            </div>
            <ul className={clsx(styles.aboutList)}>
              {about.statistics.map((statItem) => (
                <li className={clsx(styles.aboutItem)}>
                  <span className={clsx(styles.aboutNumber)}>{statItem.number}</span>
                  <span className={clsx(styles.aboutNumberText)}>{statItem.text}</span>
                </li>
              ))}
            </ul>
            {!aboutPage && (
              <Button className={clsx(styles.aboutBtn)} text>
                {about.btnText}
              </Button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeAbout;
