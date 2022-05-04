import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './ModalFeedback.module.scss';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Select from '../Select/Select';
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import ModalThank from '../ModalThank/ModalThank';
import { useDispatch, useSelector } from 'react-redux';
import { initialStateTotalFeedback, postTotalFeedback } from '../../../redux/slices/totalFeedbackSlice';
import { closeAllModal, modalThankFeedback, openModalError, openModalThank, openModalThankFeedback } from '../../../redux/slices/modalsSlice';
import { useForm } from 'react-hook-form';
const ModalFeedback = ({ onClose, onOpenThankModal }) => {
  const navigate = useNavigate();
  const { formFields, data, loading, error } = useSelector((state) => state.totalFeedback);
  const form = useForm({ defaultValues: { ...formFields }, shouldFocusError: false });
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = form;
  const onSubmit = (dataForm) => {
    {
      const localStorageParse = {
        ...localStorage,
        area: parseInt(localStorage['area']),
        bathroomsQuantity: parseInt(localStorage['bathroomsQuantity']),
        doorsQuantity: parseInt(localStorage['doorsQuantity']),
        roomsQuantity: parseInt(localStorage['roomsQuantity']),
        ceilingHeight: localStorage['ceilingHeight'] !== 'undefined' ? parseInt(localStorage['ceilingHeight']) : 0,
        isBuildWalls: JSON.parse(localStorage['isBuildWalls']),
        isNeedDismantling: JSON.parse(localStorage['isNeedDismantling']),
        total: JSON.parse(localStorage['total']),
      };
      delete localStorageParse.rooms;
      dispatch(
        postTotalFeedback({
          ...dataForm,
          data: localStorageParse,
        }),
      );
    }
    reset(initialStateTotalFeedback.formFields);
  };

  useEffect(() => {
    if (!loading && data) {
      dispatch(closeAllModal());
      dispatch(openModalThankFeedback());
    } else if (!loading && error) {
      dispatch(closeAllModal());
      dispatch(openModalError());
    }
  }, [loading]);

  return (
    <>
      <Modal withCloseBtn title="Оформить заявку" onClose={onClose} className={clsx(styles.feedbackModal)}>
        <form className={clsx(styles.feedbackForm)} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className={clsx(styles.feedbackContent)}>
            <Input rules={{ required: true }} error={errors.name} smallLabel className={clsx(styles.feedbackName)} label="Имя" placeholder="Ваше имя" name="name" register={register} />
            <Input rules={{ required: true }} type="phone" control={control} smallLabel className={clsx(styles.feedbackPhone)} label="Телефон" placeholder="+7" name="phone" register={register} error={errors.phone} />
            <Input
              rules={{
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              }}
              error={errors.email}
              smallLabel
              className={clsx(styles.feedbackEmail)}
              label="Почта"
              placeholder="Введите e-mail"
              name="email"
              register={register}
            />
            <Input rules={{ required: false }} name="message" register={register} type="textarea" rows={4} smallLabel className={clsx(styles.feedbackMessage)} label="Сообщение" placeholder="Введите сообщение" />
            <Checkbox register={register} name="writeInSocial" className={clsx(styles.feedbackCheckbox)} label="Написать в Whats’App/Telegram" />
            <p className={clsx(styles.feedbackText)}>Нажимая на кнопку «Отправить» вы даете согласие на обработку персональных данных</p>
            <Button
              // onClick={handleSubmit((dataForm) => {
              //   const localStorageParse = {
              //     ...localStorage,
              //     area: parseInt(localStorage['area']),
              //     bathroomsQuantity: parseInt(localStorage['bathroomsQuantity']),
              //     doorsQuantity: parseInt(localStorage['doorsQuantity']),
              //     roomsQuantity: parseInt(localStorage['roomsQuantity']),
              //     ceilingHeight: localStorage['ceilingHeight'] !== 'undefined' ? parseInt(localStorage['ceilingHeight']) : 0,
              //     isBuildWalls: JSON.parse(localStorage['isBuildWalls']),
              //     isNeedDismantling: JSON.parse(localStorage['isNeedDismantling']),
              //     total: JSON.parse(localStorage['total']),
              //   };
              //   delete localStorageParse.rooms;
              //   dispatch(
              //     postTotalFeedback({
              //       ...dataForm,
              //       data: localStorageParse,
              //     }),
              //   );
              // })}
              className={clsx(styles.feedbackBtnSubmit)}>
              Отправить
            </Button>
          </div>
        </form>
        {loading && <Loader />}
      </Modal>
    </>
  );
};

export default ModalFeedback;
