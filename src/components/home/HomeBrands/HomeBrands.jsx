import React from 'react';
import styles from './HomeBrands.module.scss';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import _ from 'lodash';
import 'swiper/css';
import useMediaQuery from '../../../utils/useMediaQuery';

const brands = ['/img/brand-1.svg', '/img/brand-2.svg', '/img/brand-3.svg', '/img/brand-4.svg', '/img/brand-5.svg', '/img/brand-6.svg', '/img/brand-7.svg'];
const HomeBrands = () => {
  const isMobile = useMediaQuery('(max-width: 640px)');
  return (
    <div className={clsx(styles.brands)}>
      <div className={clsx(styles.container, 'container')}>
        <div className={clsx(styles.inner)}>
          <div className={clsx(styles.title)}>Наши партнёры и поставщики</div>
          {isMobile ? (
            <div className={clsx(styles.brandsList)}>
              {brands?.map((brand) => (
                <SwiperSlide key={brand} style={{ width: '137px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '30px' }}>
                  <img className={clsx(styles.brand)} src={brand} />
                </SwiperSlide>
              ))}
            </div>
          ) : (
            <Swiper spaceBetween={50} slidesPerView={'auto'} freeMode={true}>
              {brands?.map((brand) => (
                <SwiperSlide key={brand} style={{ width: '137px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '30px' }}>
                  <img className={clsx(styles.brand)} src={brand} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeBrands;
