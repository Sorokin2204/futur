import React, { useLayoutEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './Reviews.module.scss';
import Title from '../../common/Title/Title';
import { reviews } from '../../../data/page/home';
import ReviewItem from '../../common/ReviewItem/ReviewsItem';
import { useMediaQuery } from 'react-responsive';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import _ from 'lodash';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HomeReviews = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 500px)',
  });
  const swiperRef = React.useRef(null);
  return (
    <>
      <section className={clsx(styles.reviews)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.reviewsInner)}>
            <Title className={clsx(styles.reviewsTitle)}>{reviews.title}</Title>
            <div className={clsx(styles.reviewsSwiperNavigation)}>
              <div className="swiper-home-reviews-button-prev" />
              <div className="swiper-home-reviews-button-next" />
            </div>

            <div className={clsx(styles.reviewsSwiperBox)}>
              <Swiper
                breakpoints={{
                  1240: { spaceBetween: 108, slidesPerView: 2 },
                  500: {
                    spaceBetween: 40,
                    slidesPerView: 'auto',
                  },
                }}
                className="swiper-home-reviews"
                ref={swiperRef}
                spaceBetween={20}
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: '.swiper-home-reviews-button-next',
                  prevEl: '.swiper-home-reviews-button-prev',
                }}
                pagination={{
                  el: '.swiper-home-reviews-pagination',
                  clickable: true,
                }}>
                {isMobile
                  ? _.chunk(reviews.list, 2).map((reviewGroup) => (
                      <SwiperSlide>
                        {reviewGroup.map((review) => (
                          <ReviewItem {...review} />
                        ))}
                      </SwiperSlide>
                    ))
                  : reviews.list.map((review) => (
                      <SwiperSlide key={review.name}>
                        <ReviewItem {...review} />
                      </SwiperSlide>
                    ))}
              </Swiper>
              <div className="swiper-home-reviews-pagination" />
            </div>
            <div className={clsx(styles.reviewsSwiperNavigationMobile)}>
              <div className="swiper-home-reviews-button-prev" />
              <div className="swiper-home-reviews-button-next" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeReviews;
