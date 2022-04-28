import React from 'react';
import clsx from 'clsx';
import styles from './ConstructorHead.module.scss';
import Counter from '../../common/Counter/Counter';
import Input from '../../common/Input/Input';
import Radio from '../../common/Radio/Radio';
import { common } from '../../../data/common';
const ConstructorHead = () => {
  return (
    <>
      <div className={clsx(styles.head)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.headInner)}>
            <div className={clsx(styles.headPlan)} style={{ backgroundImage: `url(${common.planImgTwo})` }}></div>
            <div className={clsx(styles.headContent)}>
              <h3 className={clsx(styles.headTitle)}>Конструктор ремонта квартиры</h3>
              <p className={clsx(styles.headText)}>Расчёт ремонта квартиры онлайн. Укажите параметры вашей квартиры, затем в конструкторе выберите планируемый дизайн квартиры, далее укажите необходимые дополнительные опции.</p>
              <div className={clsx(styles.headCity)}>
                <span className={clsx(styles.headCityLabel)}>Город</span>
                <div className={clsx(styles.headCityBox)}>
                  <Radio label={'Атырау'} value="fsdfs" name="city" block />
                  <Radio label={'Нур-Султан'} value="fsdfs" name="city" block />
                </div>
              </div>
              <div className={clsx(styles.headTypeHome)}>
                <Radio label={'Квартира'} value="fs32fsddfs" name="typeHome" />
                <Radio label={'Частный дом'} value="fsd" name="typeHome" />
              </div>

              <Input responsive label="Жилой комплекс" placeholder="Название жилого комплекса" className={clsx(styles.headComplexInput)} />
              <Counter label={'Количество комнат'} className={clsx(styles.headComplexCounter)} afterText="-комнатная" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstructorHead;
