import React from 'react';
import clsx from 'clsx';
import styles from './WorkSingle.module.scss';
import { worksList } from '../../data/list/works';
import { Navigation, Pagination } from 'swiper';
import { Interweave } from 'interweave';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react';
import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import { useSelector } from 'react-redux';
const WorkSingle = () => {
  const { singleData, singleLoading, singleError } = useSelector((state) => state.work);
  return (
    <>
      <div className={clsx(styles.workSingle)}>
        <div className={clsx(styles.container, 'container')}>
          <h2 className={clsx(styles.workSingleTitle)}>{singleData.title}</h2>
          <Interweave content={singleData.desc} className={clsx(styles.workSingleText)} />
        </div>
        <div className={clsx(styles.workSingleSwiper)}>
          <Swiper
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 0, centeredSlides: true, centerInsufficientSlides: true },
            }}
            className="swiper-work-single"
            centeredSlides={false}
            spaceBetween={16}
            centerInsufficientSlides={false}
            slidesPerView={1}
            modules={[Navigation, Pagination]}
            // spaceBetween={1}
            // slidesPerView={3}
            // centeredSlides={true}
            // roundLengths={true}
            // loop={true}
            // loopAdditionalSlides={30}
            navigation={{
              nextEl: '.swiper-work-single-button-next',
              prevEl: '.swiper-work-single-button-prev',
            }}
            pagination={{
              el: '.swiper-work-single-pagination',
              clickable: true,
              renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' + '&nbspиз&nbsp' + '<span class="' + totalClass + '"></span>';
              },

              type: 'fraction',
            }}>
            {singleData.images.map((image, index) => (
              <SwiperSlide key={image.image}>
                <img src={image.image} alt="" className={clsx(styles.workSingleImg)} />
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
