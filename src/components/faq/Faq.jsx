import React from 'react';
import clsx from 'clsx';
import styles from './Faq.module.scss';
import Title from '../common/Title/Title';
import { faq } from '../../data/page/faq';
import Accordion from '../common/Accordion/Accordion';
const Faq = () => {
  return (
    <>
      <section className={clsx(styles.faq)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.faqInner)}>
            <h2 className={clsx(styles.faqTitle)}>{faq.title}</h2>
            <span className={clsx(styles.faqCaption)}>{faq.caption}</span>
            <img src={faq.img} alt="" className={clsx(styles.faqImg)} />
            <ul className={clsx(styles.faqQuestionList)}>
              {faq.list.map((faqItem) => (
                <>
                  <Accordion title={faqItem.question} text={faqItem.answer} />
                </>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
