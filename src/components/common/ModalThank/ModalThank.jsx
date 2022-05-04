import React from 'react';
import clsx from 'clsx';
import styles from './ModalThank.module.scss';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Select from '../Select/Select';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { closeAllModal } from '../../../redux/slices/modalsSlice';
const ModalThank = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onCloseModalThank = () => {
    onClose();
    dispatch(closeAllModal());
    navigate('/');
  };
  const onAfterClose = () => {
    onClose();
    navigate('/');
  };
  return (
    <>
      <Modal title="Заявка отправлена" bigTitle className={clsx(styles.thankModal)} onAfterClose={onAfterClose}>
        <div className={clsx(styles.thank)}>
          <p className={clsx(styles.thankText)}>Наш сотрудник позвонит вам вам в самое ближайшее время. </p>

          <Button className={clsx(styles.thankBtnGreat)} small onClick={onCloseModalThank}>
            Отлично
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalThank;
