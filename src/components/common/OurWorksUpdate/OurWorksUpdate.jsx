import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './OurWorksUpdate.module.scss';
import { ourWorks } from '../../../data/page/home';
import Title from '../Title/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import _ from 'lodash';
import 'swiper/css';
import 'swiper/css/navigation';
import TitleBold from '../TitleBold/TitleBold';
import OurWorkItemUpdate from '../OurWorkItemUpdate/OurWorkItemUpdate';
import Button from '../Button/Button';
import { common } from '../../../data/common';
import useMediaQuery from '../../../utils/useMediaQuery';
import { useSelector } from 'react-redux';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';
const OurWorksUpdate = ({ aboutPage }) => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { data } = useSelector((state) => state.work);

  const workBlockRef = useRef();
  const titleRef = useRef();
  const worksItemsRef = useRef([]);
  const planRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    if (data) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.defaults({ duration: 0.4 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: workBlockRef.current,
            start: 'top 90%',
          },
        })
        .fromTo(planRef.current, { opacity: 0 }, { delay: 0.5, opacity: 1 })
        .fromTo(titleRef.current, { opacity: 0 }, { opacity: 1 })
        .fromTo(worksItemsRef.current, { xPercent: -15, opacity: 0 }, { xPercent: 0, opacity: 1, stagger: 0.2 })
        .fromTo(btnRef.current, { opacity: 0 }, { opacity: 1 });
    }
  }, [data]);

  return (
    <>
      <section className={clsx(styles.ourWorks, aboutPage && styles.ourWorksAboutPage)} ref={workBlockRef}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.ourWorksInner)}>
            <div className={clsx(styles.plan)} ref={planRef} style={{ backgroundImage: `url(${common.planImg})` }}></div>
            <TitleBold titleRef={titleRef} className={clsx(styles.ourWorksTitle)}>
              {ourWorks.title}
            </TitleBold>
            {isMobile ? (
              <div style={{ width: '226px', margin: '0 auto', position: 'relative' }}>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  centeredSlide={true}
                  freeMode={true}
                  modules={[Navigation]}
                  navigation={{
                    nextEl: '.swiper-our-works-button-next',
                    prevEl: '.swiper-our-works-button-prev',
                  }}>
                  {data?.map((work, i) => (
                    <SwiperSlide key={work.slug} style={{ width: '226px', height: '420px', display: 'flex', justifyContent: 'center' }}>
                      <div className={clsx(styles.ourWorksItem)} ref={(e) => (worksItemsRef.current[i] = e)}>
                        {' '}
                        <OurWorkItemUpdate list={work.list} img={work.img} path={work.slug} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-our-works-button-prev" />
                <div className="swiper-our-works-button-next" />
              </div>
            ) : (
              <ul className={clsx(styles.ourWorksList)}>
                {data?.map((work, i) => (
                  <li className={clsx(styles.ourWorksItem)} ref={(e) => (worksItemsRef.current[i] = e)}>
                    <OurWorkItemUpdate list={work.list} img={work.img} path={work.slug} />
                  </li>
                ))}
              </ul>
            )}

            <Button btnRef={btnRef} small={isMobile} className={clsx(styles.btnMore)}>
              Показать больше{' '}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWorksUpdate;
