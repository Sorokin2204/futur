import React from 'react';
import clsx from 'clsx';
import styles from './ConstructorChoice.module.scss';
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router';
const ConstructorChoice = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={clsx(styles.choice)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.choiceInner)}>
            <div className={clsx(styles.choiceBox)}>
              <span className={clsx(styles.choiceTitle)}>Ваш выбор:</span>
              <p className={clsx(styles.choiceText)}>Атырау, квартира, 3-комнатная, площадь 120 м², кол-во дверей: 1, кол-во санузлов: 1</p>
            </div>
            <Button className={clsx(styles.choiceBtn)} small onClick={() => navigate('/constructor/123')}>
              Продолжить
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstructorChoice;
