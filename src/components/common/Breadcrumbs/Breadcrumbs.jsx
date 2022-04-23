import React from 'react';
import clsx from 'clsx';
import styles from './Breadcrumbs.module.scss';
import { Link } from 'react-router-dom';
const Breadcrumbs = ({ list }) => {
  return (
    <>
      <div className={clsx(styles.breadcrumbs)}>
        <div className={clsx(styles.container, 'container')}>
          <ul className={clsx(styles.breadcrumbsList)}>
            {list.map((item, index) => {
              return (
                <li className={clsx(styles.breadcrumbsItem)}>
                  {index === list.length - 1 ? (
                    <span className={clsx(styles.breadcrumbsLabel)}>{item.name}</span>
                  ) : (
                    <Link to={item.path} className={clsx(styles.breadcrumbsLink)}>
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
