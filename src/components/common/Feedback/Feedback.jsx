import React from 'react';
import clsx from 'clsx';
import styles from './Feedback.module.scss';
import { feedback } from '../../../data/page/feedback';
import Title from '../Title/Title';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';
import { common } from '../../../data/common';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { initialStateFeedback, postFeedback } from '../../../redux/slices/feedbackSlice';
import { openModalThank } from '../../../redux/slices/modalsSlice';
import useMediaQuery from '../../../utils/useMediaQuery';
import TitleBold from '../TitleBold/TitleBold';
const Feedback = ({ light }) => {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const { formFields } = useSelector((state) => state.feedback);
  const form = useForm({ defaultValues: { ...formFields }, shouldFocusError: false });
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = form;
  const onSubmit = (data) => {
    const phone = data.phone.replace(/-/g, ' ').replace(/ /g, '').replace(/\(/g, '').replace(/\)/g, '');
    console.log(phone);
    console.log({ ...data, phone });
    dispatch(postFeedback({ ...data, phone }));
    reset(initialStateFeedback.formFields);
    dispatch(openModalThank());
  };
  return (
    <>
      <section className={clsx(styles.feedback, light && styles.feedbackLight)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.feedbackInner)}>
            <div className={clsx(styles.feedbackPlan)} style={{ backgroundImage: `url(${common.planImgTwo})` }}></div>
            <div className={clsx(styles.feedbackContent)}>
              {isMobile ? <TitleBold className={clsx(styles.feedbackTitle)}>{feedback.title}</TitleBold> : <Title className={clsx(styles.feedbackTitle)}>{feedback.title}</Title>}

              <p className={clsx(styles.feedbackText)}>{feedback.text}</p>
              <form className={clsx(styles.feedbackForm)} onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <Input rules={{ required: true }} error={errors.name} type="text" className={clsx(styles.feedbackInput)} label={feedback.name.label} placeholder={feedback.name.placeholder} smallLabel name="name" register={register} />
                <Input rules={{ required: true }} type="phone" error={errors.phone} control={control} label={feedback.phone.label} placeholder={feedback.phone.placeholder} className={clsx(styles.feedbackInput)} smallLabel name="phone" register={register} />

                <Checkbox register={register} name="writeInSocial" className={clsx(styles.feedbackCheckbox)} label={feedback.accept.label} />
                <Button className={clsx(styles.feedbackSubmit)}>{feedback.btnText}</Button>
              </form>
              <p className={clsx(styles.feedbackTextAccept)}>{feedback.acceptText}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Feedback;
