import React from 'react';
import clsx from 'clsx';
import styles from './Reviews.module.scss';
import Title from '../common/Title/Title';
import { reviews } from '../../data/page/reviews';
import ReviewItem from '../common/ReviewItem/ReviewsItem';
const Reviews = () => {
  return (
    <>
      <div className={clsx(styles.reviews)}>
        <div className={clsx(styles.container, 'container')}>
          <Title className={clsx(styles.reviewsTitle)}>{reviews.title}</Title>
          <ul className={clsx(styles.reviewsList)}>
            {reviews.list.map((review) => (
              <ReviewItem {...review} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Reviews;
