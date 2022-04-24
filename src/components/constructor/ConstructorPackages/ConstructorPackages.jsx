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

const ConstructorPackages = () => {
  const [groupByTypePackage, setGroupByTypePackage] = useState([]);
  const [showPackages, setShowPackages] = useState([]);
  const [activeType, setActiveType] = useState(null);
  const [activePackage, setActivePackage] = useState(null);
  useEffect(() => {
    setGroupByTypePackage(_.groupBy(packageList, (packageItem) => packageItem.category));
  }, []);

  useEffect(() => {
    if (groupByTypePackage.length !== 0) {
      setActiveType('all');
    }
  }, [groupByTypePackage]);

  useEffect(() => {
    if (activeType === 'all') {
      setShowPackages(groupByTypePackage);
    } else {
      if (groupByTypePackage[activeType]) {
        setShowPackages({ [`${activeType}`]: groupByTypePackage[activeType] });
      }
    }
  }, [activeType]);

  useEffect(() => {}, [showPackages]);

  return (
    <>
      <div className={clsx(styles.packages)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.packagesInner)}>
            <h3 className={clsx(styles.packagesTitle)}>Выбрите пакет</h3>
            <Filter className={clsx(styles.packagesListFilter)}>
              {typePackageList.map((type, index) => (
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
                modules={[Navigation, Scrollbar]}
                scrollbar
                navigation={{
                  nextEl: '.swiper-constructor-packages-button-next',
                  prevEl: '.swiper-constructor-packages-button-prev',
                }}>
                {Object.keys(showPackages).length !== 0 &&
                  Object.keys(showPackages)?.map((typePackage, i) => {
                    return showPackages[typePackage]?.map((packageItem) => (
                      <SwiperSlide className={clsx(styles.packageSwiperSlide)} onClick={() => setActivePackage(packageItem.name)}>
                        <div className={clsx(styles.packageSwiperSlideWrap)}>
                          {' '}
                          <Package {...packageItem} active={activePackage === packageItem.name} small />
                        </div>
                      </SwiperSlide>
                    ));
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
