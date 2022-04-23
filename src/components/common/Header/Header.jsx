import clsx from 'clsx';
import React from 'react';
import { common } from '../../../data/common';
import '../../../styles/index.scss';
import styles from './Header.module.scss';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
