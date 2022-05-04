import React from 'react';
import clsx from 'clsx';
import styles from './ModalGoBack.module.scss';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Select from '../Select/Select';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { closeAllModal } from '../../../redux/slices/modalsSlice';
const ModalGoBack = ({ onClose, clearStorage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <Modal title="Вернуться назад?" onClose={onClose} className={clsx(styles.goBackModal)}>
        <div className={clsx(styles.goBack)}>
          <p className={clsx(styles.goBackText)}>Вы уверены, что хотите вернуться назад? Будут потеряны ваши действия. </p>
          <div className={clsx(styles.goBackBtnBox)}>
            <Button className={clsx(styles.goBackBtnCancel)} smallOutline onClick={() => dispatch(closeAllModal())}>
              Отмена
            </Button>
            <Button
              className={clsx(styles.goBackBtnAdd)}
              small
              onClick={() => {
                dispatch(closeAllModal());
                if (clearStorage) {
                  localStorage.clear();
                }
                navigate('/constructor-start');
              }}>
              Да
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalGoBack;
