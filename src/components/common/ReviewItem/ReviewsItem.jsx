import React from 'react';
import clsx from 'clsx';
import styles from './ReviewItem.module.scss';
const ReviewItem = ({ img, room, text, name, address }) => {
  return (
    <>
      <div className={clsx(styles.reviewItem)}>
        <div className={clsx(styles.reviewImgBox)}>
          <img src={img} alt="" className={clsx(styles.reviewImg)} />
        </div>

        <div className={clsx(styles.reviewContent)}>
          <span className={clsx(styles.reviewRoom)}>{room}</span>
          <p className={clsx(styles.reviewText)}>{text}</p>
          <span className={clsx(styles.reviewName)}>{name}</span>
          <span className={clsx(styles.reviewAddress)}>{address}</span>
        </div>
      </div>
    </>
  );
};

export default ReviewItem;
