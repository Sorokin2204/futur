import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ConstructorHead.module.scss';
import { useNavigate } from 'react-router';
import ModalGoBack from '../../common/ModalGoBack/ModalGoBack';
import Button from '../../common/Button/Button';
import { updateChoice } from '../../constructor/ConstructorChoice/ConstructorChoice';
import _ from 'lodash';
import { openModalGoBack, openModalGoBackClearStorage } from '../../../redux/slices/modalsSlice';
import { useDispatch } from 'react-redux';
const ConstructorHead = ({ className }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={clsx(styles.head, className)}>
        <Button className={clsx(styles.headBtnBack)} icon="/icons/chevron-left.svg" onClick={() => dispatch(openModalGoBackClearStorage())}>
          Назад
        </Button>
        <span className={clsx(styles.headTitle)}>{localStorage['address'] ? localStorage['address'] : localStorage['livingComplex'] ? localStorage['livingComplex'] : ''}</span>
        <button className={clsx(styles.headBtnEdit)} onClick={() => dispatch(openModalGoBack())}></button>
        <p className={clsx(styles.headConfig)}>{updateChoice(_.omit(localStorage, ['city', 'houseType', 'livingComplex', 'address'])).join(', ')}</p>
      </div>
    </>
  );
};

export default ConstructorHead;
