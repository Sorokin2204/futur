import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ConstructorHead.module.scss';
import { useNavigate } from 'react-router';
import ModalGoBack from '../../common/ModalGoBack/ModalGoBack';
const ConstructorHead = ({ className }) => {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <>
      <div className={clsx(styles.head, className)}>
        <span className={clsx(styles.headTitle)}>ЖК Агат</span>
        <button className={clsx(styles.headBtnEdit)} onClick={() => setActiveModal(true)}></button>
        <p className={clsx(styles.headConfig)}>Кол-во комнат: 2, Площадь, м²: 48, Кол-во санузлов: 1, нужен демонтаж</p>
      </div>{' '}
      {activeModal && <ModalGoBack onClose={() => setActiveModal(false)} />}
    </>
  );
};

export default ConstructorHead;
