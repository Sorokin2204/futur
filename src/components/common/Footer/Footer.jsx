import React from 'react';
import clsx from 'clsx';
import styles from './Footer.module.scss';
import { common } from '../../../data/common';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer className={clsx(styles.footer)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.footerInner)}>
            <Link to={'/'} className={clsx(styles.logoTitle)}>
              <img src={common.logoFoooter} alt="" />
            </Link>
            {/* <img src={common.logoFoooter} alt="" className={clsx(styles.footerLogo)} /> */}
            <ul className={clsx(styles.footerMenu)}>
              {common.menu.map((menuItem) => (
                <li className={clsx(styles.footerMenuItem)}>
                  <Link to={menuItem.path} className={clsx(styles.footerMenuLink)}>
                    {menuItem.page}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className={clsx(styles.footerSocial)}>
              {common.socialList.map((social) => (
                <li className={clsx(styles.footerSocialItem)}>
                  <a href={social.link} className={clsx(styles.footerSocialLink)}>
                    <img src={social.icon} alt="" className={clsx(styles.footerSocialIcon)} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.footerBottom)}>
            <p className={clsx(styles.footerRights)}>© 2021. Все права защищены.</p>
            <a href="" className={clsx(styles.footerPolicy)}>
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
