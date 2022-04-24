import React from 'react';
import clsx from 'clsx';
import styles from './Feedback.module.scss';
import { feedback } from '../../../data/page/feedback';
import Title from '../Title/Title';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';
import { common } from '../../../data/common';
const Feedback = ({ light }) => {
  return (
    <>
      <section className={clsx(styles.feedback, light && styles.feedbackLight)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.feedbackInner)}>
            <div className={clsx(styles.feedbackPlan)} style={{ backgroundImage: `url(${common.planImgTwo})` }}></div>
            <div className={clsx(styles.feedbackContent)}>
              <Title className={clsx(styles.feedbackTitle)}>{feedback.title}</Title>
              <p className={clsx(styles.feedbackText)}>{feedback.text}</p>
              <form className={clsx(styles.feedbackForm)}>
                <Input className={clsx(styles.feedbackInput)} label={feedback.name.label} placeholder={feedback.name.placeholder} smallLabel />
                <Input label={feedback.phone.label} placeholder={feedback.phone.placeholder} className={clsx(styles.feedbackInput)} smallLabel />
                <Checkbox className={clsx(styles.feedbackCheckbox)} label={feedback.accept.label} />
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
