import React from 'react';
import clsx from 'clsx';
import styles from './ModalError.module.scss';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { closeAllModal } from '../../../redux/slices/modalsSlice';
import { resetRoomSingle } from '../../../redux/slices/roomSingleSlice';
const ModalError = ({ clearStorage }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  return (
    <>
      <Modal
        title="Произошла непредвиденная ошибка"
        className={clsx(styles.errorModal)}
        onAfterClose={() => {
          navigate('/constructor-start');
          dispatch(resetRoomSingle());
        }}>
        <div className={clsx(styles.error)}>
          <p className={clsx(styles.errorText)}>Что то пошло не так. Перейдите на начальную страницу конструктора и заполните информацию заново.</p>
          <div className={clsx(styles.errorBtnBox)}>
            <Button
              className={clsx(styles.errorBtnAdd)}
              small
              onClick={() => {
                dispatch(closeAllModal());
                if (clearStorage) {
                  localStorage.clear();
                }
                navigate('/constructor-start');
                dispatch(resetRoomSingle());
              }}>
              Перейти
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalError;
