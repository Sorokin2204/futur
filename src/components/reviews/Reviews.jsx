import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './Reviews.module.scss';
import Title from '../common/Title/Title';
import { reviews } from '../../data/page/reviews';
import ReviewItem from '../common/ReviewItem/ReviewsItem';
import { getReviews } from '../../redux/slices/reviewSlice';
import { useDispatch, useSelector } from 'react-redux';
const Reviews = () => {
  const { data, loading } = useSelector((state) => state.review);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviews());
  }, []);
  return (
    <>
      <div className={clsx(styles.reviews)}>
        <div className={clsx(styles.container, 'container')}>
          <Title className={clsx(styles.reviewsTitle)}>{reviews.title}</Title>
          <ul className={clsx(styles.reviewsList)}>
            {data?.map((review) => (
              <ReviewItem {...review} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Reviews;
