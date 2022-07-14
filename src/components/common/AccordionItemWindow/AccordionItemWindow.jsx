import React from 'react';
import clsx from 'clsx';
import styles from './AccordionItemWindow.module.scss';
import { currencyFormat } from '../../../utils/currencyFormat';
import env from 'react-dotenv';
const AccordionItemWindow = ({ previewImg, name, desc, price, active, onClick }) => {
  return (
    <>
      <div className={clsx(styles.accordionItem, active && styles.accordionItemActive)} onClick={onClick}>
        {active && <div className={clsx(styles.accordionItemActiveIcon)}></div>}
        <img
          src={env.SERVER_URL + previewImg}
          alt=""
          className={clsx(styles.accordionItemImg)}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = '/img/no-image.png';
          }}
        />
        <div className={clsx(styles.accordionItemContent)}>
          <span className={clsx(styles.accordionItemName)}>{name}</span>
          <p className={clsx(styles.accordionItemDesc)}>{desc}</p>
          <span className={clsx(styles.accordionItemPrice)}>{`+${currencyFormat(price)} ₸`}</span>
        </div>
      </div>
    </>
  );
};

export default AccordionItemWindow;
