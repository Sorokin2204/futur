import React from 'react';
import clsx from 'clsx';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';
import { common } from '../../../data/common';
import { useLocation } from 'react-router';
const Menu = ({ open, onClose }) => {
  const location = useLocation();
  return (
    <>
      <ul className={clsx(styles.menuList, open && styles.menuListActive)}>
        {common.menu.map((menuItem) => (
          <li className={clsx(styles.menuItem)}>
            <Link to={menuItem.path} className={clsx(styles.menuLink, location.pathname == menuItem.path && styles.menuLinkActive)} onClick={() => onClose()}>
              {menuItem.page}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
