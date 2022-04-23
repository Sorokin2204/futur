import React from 'react';
import clsx from 'clsx';
import styles from './Reviews.module.scss';
import Title from '../../common/Title/Title';

import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { reviews } from '../../../data/page/home';
import ReviewItem from '../../common/ReviewItem/ReviewsItem';
const HomeReviews = () => {
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
                className="swiper-home-reviews"
                ref={swiperRef}
                spaceBetween={108}
                slidesPerView={2}
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: '.swiper-home-reviews-button-next',
                  prevEl: '.swiper-home-reviews-button-prev',
                }}
                pagination={{
                  el: '.swiper-home-reviews-pagination',
                  clickable: true,
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>
                {reviews.list.map((review) => (
                  <SwiperSlide>
                    <ReviewItem {...review} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-home-reviews-pagination" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeReviews;
