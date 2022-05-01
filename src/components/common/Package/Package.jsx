import React from 'react';
import clsx from 'clsx';
import styles from './Package.module.scss';
import { currencyFormat } from '../../../utils/currencyFormat';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Package = ({ previewImage, name, price, defaultDetails, small, active, className }) => {
  return (
    <>
      <li className={clsx(styles.package, className, small && styles.packageSmall, active && styles.packageActive)}>
        {active && <div className={clsx(styles.packageActiveIcon)}></div>}
        <LazyLoadImage wrapperClassName={clsx(styles.packageImg)} alt="" effect="blur" src={previewImage} delayTime={200} width={326} height={222} />
        {/* <img src={previewImage} alt="" /> */}
        <div className={clsx(styles.packageContent)}>
          <span className={clsx(styles.packageName)}>{name}</span>
          <span className={clsx(styles.packagePrice)}>
            {currencyFormat(price)}
            <span>{'₸/м²'}</span>
          </span>
          <ul className={clsx(styles.packageList)}>
            {defaultDetails.map((detail) => (
              <li className={clsx(styles.packageItem)}>
                <span className={clsx(styles.packageLabel)}>{detail.label}</span>
                <span className={clsx(styles.packageValue)}>{detail.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </>
  );
};

export default Package;
