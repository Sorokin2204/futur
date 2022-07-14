import React from 'react';
import clsx from 'clsx';
import styles from './OurWorkItemUpdate.module.scss';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

const OurWorkItemUpdate = ({ img, title, text, path, list }) => {
  const navigate = useNavigate();
  return (
    <div className={clsx(styles.wrap)} onClick={() => navigate(`/works/${path}`)}>
      <img src={img} alt="" className={clsx(styles.ourWorkItemImg)} />
      <div className={clsx(styles.hover)}>
        <ul className={clsx(styles.hoverList)}>
          {list?.map((item) => (
            <li className={clsx(styles.hoverItem)}>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OurWorkItemUpdate;
