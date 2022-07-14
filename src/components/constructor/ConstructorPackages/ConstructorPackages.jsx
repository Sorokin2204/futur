import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './ConstructorPackages.module.scss';
import { packageList, typePackageList } from '../../../data/list/packages';
import _ from 'lodash';
import Filter from '../../common/Filter/Filter';
import FilterItem from '../../common/FilterItem/FilterItem';
import Package from '../../common/Package/Package';
import { Navigation, Pagination, Scrollbar } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import { getPackages, packagesDefaultOptionsSelector, setActivePackage } from '../../../redux/slices/packageSlice';
import { getPackageTypes } from '../../../redux/slices/packageTypeSlice';

const ConstructorPackages = () => {
  const [activeType, setActiveType] = useState('');

  const packagesDefaultOptionsSelectorr = useSelector((state) => packagesDefaultOptionsSelector(state.package));

  const { data: packages, loading: loadingPackages, error: errorPackages, selectedPackage } = useSelector((state) => state.package);
  const { data: packageTypes, loading: loadingPackageTypes, error: errorPackageTypes } = useSelector((state) => state.packageType);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPackages());
    dispatch(getPackageTypes());
  }, []);

  useEffect(() => {
    dispatch(setActivePackage(null));
  }, [activeType]);

  useEffect(() => {
    if (packages) {
      console.log(packagesDefaultOptionsSelectorr);
      if (localStorage['package']) dispatch(setActivePackage({ slug: localStorage['package'] }));
      else {
        dispatch(setActivePackage(null));
      }
    }
  }, [packages]);

  return (
    <>
      <div className={clsx(styles.packages)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.packagesInner)}>
            <h3 className={clsx(styles.packagesTitle)}>Выбрите пакет</h3>
            <Filter className={clsx(styles.packagesListFilter)}>
              <FilterItem active={activeType === ''} onClick={() => setActiveType('')}>
                Все
              </FilterItem>
              {!loadingPackageTypes &&
                packageTypes &&
                packageTypes.map((type, index) => (
                  <FilterItem active={type.slug === activeType} onClick={() => setActiveType(type.slug)}>
                    {type.name}
                  </FilterItem>
                ))}
            </Filter>
            <p className={clsx(styles.packageText)}>Пакеты включают в себя черновые и чистовые материалы, а также профессиональный ремонт и гарантию от SmartRemont</p>

            <div className={clsx(styles.packagesSwiperBox)}>
              <Swiper
                className={'swiper-constructor-packages'}
                spaceBetween={14}
                slidesPerView={'auto'}
                slidesOffsetAfter={0}
                modules={[Navigation, Scrollbar]}
                scrollbar
                navigation={{
                  nextEl: '.swiper-constructor-packages-button-next',
                  prevEl: '.swiper-constructor-packages-button-prev',
                }}>
                {!loadingPackages &&
                  packages &&
                  packagesDefaultOptionsSelectorr &&
                  packagesDefaultOptionsSelectorr.map((packageItem) => {
                    if (packageItem.category === activeType || activeType === '')
                      return (
                        <SwiperSlide className={clsx(styles.packageSwiperSlide)} onClick={() => dispatch(setActivePackage(packageItem))}>
                          <div className={clsx(styles.packageSwiperSlideWrap)}>
                            <Package {...packageItem} active={selectedPackage?.slug === packageItem?.slug} small />
                          </div>
                        </SwiperSlide>
                      );
                  })}
              </Swiper>
              <div className="swiper-constructor-packages-button-prev" />
              <div className="swiper-constructor-packages-button-next" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstructorPackages;
