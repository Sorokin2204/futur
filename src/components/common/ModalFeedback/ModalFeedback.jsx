import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ModalFeedback.module.scss';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Select from '../Select/Select';
import { useNavigate } from 'react-router';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import ModalThank from '../ModalThank/ModalThank';
const ModalFeedback = ({ onClose, onOpenThankModal }) => {
  const navigate = useNavigate();
  return (
    <>
      <Modal withCloseBtn title="Оформить заявку" onClose={onClose} className={clsx(styles.feedbackModal)}>
        <div className={clsx(styles.feedbackContent)}>
          <Input smallLabel className={clsx(styles.feedbackName)} label="Имя" placeholder="Ваше имя" />
          <Input smallLabel className={clsx(styles.feedbackPhone)} label="Телефон" placeholder="+7" />
          <Input smallLabel className={clsx(styles.feedbackEmail)} label="Почта" placeholder="Введите e-mail" />
          <Input type="textarea" rows={4} smallLabel className={clsx(styles.feedbackMessage)} label="Сообщение" placeholder="Введите сообщение" />
          <Checkbox className={clsx(styles.feedbackCheckbox)} label="Написать в Whats’App/Telegram" />
          <p className={clsx(styles.feedbackText)}>Нажимая на кнопку «Отправить» вы даете согласие на обработку персональных данных</p>
          <Button
            onClick={() => {
              onClose();
              onOpenThankModal();
            }}
            className={clsx(styles.feedbackBtnSubmit)}>
            Отправить{' '}
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ModalFeedback;
