import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { common } from '../../../data/common';
import '../../../styles/index.scss';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';
import Menu from '../Menu/Menu';
import env from 'react-dotenv';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const onClose = () => {
    setOpenMenu(false);
  };
  useEffect(() => {
    if (openMenu) document.body.style.overflow = 'hidden';
    else {
      document.body.style.overflow = 'unset';
    }
  }, [openMenu]);
  return (
    <>
      <header className={clsx(styles.header)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.inner)}>
            <Link to={'/'} className={clsx(styles.logo)}>
              <img src={common.logoHeader} alt="" />
            </Link>

            <ul className={clsx(styles.menu)}>
              {common.menu.map((menuItem) => (
                <li className={clsx(styles.menuItem)}>
                  <NavLink to={menuItem.path} className={({ isActive }) => (isActive ? clsx(styles.menuLink, styles.menuLinkActive) : clsx(styles.menuLink))}>
                    {menuItem.page}
                  </NavLink>
                </li>
              ))}
            </ul>
            <button className={clsx(styles.menuBtnBurger, openMenu && styles.menuBtnBurgerClose)} onClick={() => setOpenMenu(!openMenu)}>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </button>
          </div>
        </div>
        <Menu open={openMenu} onClose={onClose} />
      </header>
    </>
  );
};

export default Header;
