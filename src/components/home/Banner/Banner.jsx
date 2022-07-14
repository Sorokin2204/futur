import clsx from 'clsx';
import Button from '../../common/Button/Button';
import styles from './Banner.module.scss';
import { common } from '../../../data/common';
import { banner } from '../../../data/page/home';
import { useNavigate } from 'react-router';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { gsap } from 'gsap/dist/gsap';
import { useEffect, useRef } from 'react';

const HomeBanner = () => {
  const titleRef = useRef();
  const bannerBlockRef = useRef();
  const planRef = useRef();
  const imgRef = useRef();
  const descRef = useRef();
  const btnRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ duration: 0.4 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: bannerBlockRef.current,
          start: 'top 70%',
        },
      })
      .fromTo(planRef.current, { opacity: 0 }, { delay: 0.5, opacity: 1 })
      .fromTo(imgRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 })
      .fromTo(titleRef.current, { xPercent: -15, opacity: 0 }, { xPercent: 0, opacity: 1 })
      .fromTo(descRef.current, { xPercent: -15, opacity: 0 }, { xPercent: 0, opacity: 1 })
      .fromTo(btnRef.current, { xPercent: -15, opacity: 0 }, { xPercent: 0, opacity: 1 });
  }, []);

  const navigate = useNavigate();
  return (
    <div className={clsx(styles.banner)} ref={bannerBlockRef.current}>
      <div className={clsx(styles.container, 'container')}>
        <div className={clsx(styles.inner)}>
          <div className={clsx(styles.plan)} ref={planRef} style={{ backgroundImage: `url(${common.planImg})` }}></div>
          <div className={clsx(styles.bannerCol)}>
            <h1 ref={titleRef} className={clsx(styles.bannerTitle)}>
              {banner.title}
            </h1>
            <p className={clsx(styles.bannerText)} ref={descRef}>
              {banner.text}
            </p>
            <Button className={clsx(styles.bannerBtn)} arrow onClick={() => navigate('/constructor-start')} btnRef={btnRef}>
              {banner.btnText}
            </Button>
          </div>{' '}
          <div className={clsx(styles.bannerImgBox)} ref={imgRef}>
            <img src={banner.img} alt="" className={clsx(styles.bannerImg)} />
          </div>
        </div>{' '}
      </div>
    </div>
  );
};

export default HomeBanner;
