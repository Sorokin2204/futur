import clsx from 'clsx';
import Button from '../../common/Button/Button';
import styles from './Banner.module.scss';
import { common } from '../../../data/common';
import { banner } from '../../../data/page/home';
import { useNavigate } from 'react-router';
const HomeBanner = () => {
  const navigate = useNavigate();
  return (
    <div className={clsx(styles.banner)}>
      <div className={clsx(styles.container, 'container')}>
        <div className={clsx(styles.inner)}>
          <div className={clsx(styles.plan)} style={{ backgroundImage: `url(${common.planImg})` }}></div>
          <div className={clsx(styles.bannerCol)}>
            <h1 className={clsx(styles.bannerTitle)}>{banner.title}</h1>
            <p className={clsx(styles.bannerText)}>{banner.text}</p>
            <Button className={clsx(styles.bannerBtn)} arrow onClick={() => navigate('/constructor-start')}>
              {banner.btnText}
            </Button>
          </div>{' '}
          <div className={clsx(styles.bannerImgBox)}>
            <img src={banner.img} alt="" className={clsx(styles.bannerImg)} />
          </div>
        </div>{' '}
      </div>
    </div>
  );
};

export default HomeBanner;
