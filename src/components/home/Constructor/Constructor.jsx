import React from 'react';
import clsx from 'clsx';
import styles from './Constructor.module.scss';
import Title from '../../common/Title/Title';
import Button from '../../common/Button/Button';
import { constructor } from '../../../data/page/home';
const HomeConstructor = () => {
  return (
    <>
      <div className={clsx(styles.constructor)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.constructorInner)}>
            <div className={clsx(styles.constructorContent)}>
              <Title className={clsx(styles.constructorTitle)}>{constructor.title}</Title>
              <p className={clsx(styles.contsturctorText)}>{constructor.text}</p>
              <Button className={clsx(styles.consturctorBtn)} arrow>
                {constructor.btnText}
              </Button>
            </div>
            <div className={clsx(styles.constructorImgBox)}>
              <img src={constructor.img} alt="" className={clsx(styles.constructorImg)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeConstructor;
