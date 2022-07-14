import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../../redux/slices/reviewSlice';
import TitleBold from '../../common/TitleBold/TitleBold';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';
const HomeReviews = () => {
  const { data, loading } = useSelector((state) => state.review);
  const reviewsBlockRef = useRef();
  const itemsRef = useRef([]);
  const titleRef = useRef();
  const leftRef = useRef();
  const rightRef = useRef();
  useEffect(() => {
    if (data) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ duration: 0.3 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: reviewsBlockRef.current,
            start: 'top 80%',
          },
        })

        .fromTo(titleRef.current, { opacity: 0 }, { xPercent: 0, opacity: 1, delay: 0.3 })
        .fromTo(leftRef.current, { scale: 0 }, { scale: 1 })
        .fromTo(rightRef.current, { scale: 0 }, { scale: 1 })
        .fromTo(itemsRef.current, { xPercent: -5, opacity: 0 }, { xPercent: 0, opacity: 1, stagger: 0.3 });
    }
  }, [data]);

  const isMobile = useMediaQuery({
    query: '(max-width: 500px)',
  });
  const swiperRef = React.useRef(null);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!data) dispatch(getReviews());
  }, []);
  return (
    <>
      <section className={clsx(styles.reviews)} ref={reviewsBlockRef}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.reviewsInner)}>
            <TitleBold titleRef={titleRef} className={clsx(styles.reviewsTitle)}>
              {reviews.title}
            </TitleBold>
            <div className={clsx(styles.reviewsSwiperNavigation)}>
              <div className="swiper-home-reviews-button-prev" ref={leftRef} />
              <div className="swiper-home-reviews-button-next" ref={rightRef} />
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
                  ? _.chunk(data, 2)?.map((reviewGroup) => (
                      <SwiperSlide>
                        {reviewGroup.map((review, i) => (
                          <div ref={(e) => (itemsRef.current[i] = e)}>
                            {' '}
                            <ReviewItem {...review} />
                          </div>
                        ))}
                      </SwiperSlide>
                    ))
                  : data?.map((review, i) => (
                      <SwiperSlide key={review.name}>
                        <div ref={(e) => (itemsRef.current[i] = e)}>
                          {' '}
                          <ReviewItem {...review} />
                        </div>
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
