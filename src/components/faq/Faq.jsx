import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './Faq.module.scss';
import Title from '../common/Title/Title';
import { faq } from '../../data/page/faq';
import Accordion from '../common/Accordion/Accordion';
import { useDispatch, useSelector } from 'react-redux';
import { getFaq } from '../../redux/slices/faqSlice';
const Faq = () => {
  const { data, loading } = useSelector((state) => state.faq);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFaq());
  }, []);

  return (
    <>
      <section className={clsx(styles.faq)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.faqInner)}>
            <h2 className={clsx(styles.faqTitle)}>{faq.title}</h2>
            <span className={clsx(styles.faqCaption)}>{faq.caption}</span>
            <img src={faq.img} alt="" className={clsx(styles.faqImg)} />
            <ul className={clsx(styles.faqQuestionList)}>
              {data?.map((faqItem) => (
                <>
                  <Accordion title={faqItem.title} text={faqItem.text} />
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
