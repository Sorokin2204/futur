import React from 'react';
import clsx from 'clsx';
import styles from './WorkSingle.module.scss';
import { worksList } from '../../data/list/works';
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react';
import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
const WorkSingle = () => {
  return (
    <>
      <div className={clsx(styles.workSingle)}>
        <div className={clsx(styles.container, 'container')}>
          <h2 className={clsx(styles.workSingleTitle)}>{worksList[0].title}</h2>
          <p className={clsx(styles.workSingleText)}> {worksList[0].fullText}</p>
        </div>
        <div className={clsx(styles.workSingleSwiper)}>
          <Swiper
            className="swiper-work-single"
            centeredSlides={true}
            slidesOffsetAfter={0}
            slidesPerGroup={1}
            spaceBetween={120}
            centerInsufficientSlides={true}
            slidesPerView={'auto'}
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: '.swiper-work-single-button-next',
              prevEl: '.swiper-work-single-button-prev',
            }}
            pagination={{
              el: '.swiper-work-single-pagination',
              clickable: true,
              //   renderFraction: function (currentClass, totalClass) {
              //     return '<span class="' + currentClass + '"></span>' + '&nbspиз&nbsp' + '<span class="' + totalClass + '"></span>';
              //   },

              type: 'fraction',
            }}>
            {worksList[0].images.map((image, index) => (
              <SwiperSlide key={image}>
                <img src={image} alt="" className={clsx(styles.workSingleImg)} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-work-single-button-prev" />
          <div className="swiper-work-single-button-next" />
        </div>
        <div className="swiper-work-single-pagination" />
      </div>
    </>
  );
};

export default WorkSingle;
