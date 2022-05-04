import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './TotalFooter.module.scss';
import Button from '../../common/Button/Button';
import ModalFeedback from '../../common/ModalFeedback/ModalFeedback';
import ModalThank from '../../common/ModalThank/ModalThank';
import _ from 'lodash';
import { currencyFormat } from '../../../utils/currencyFormat';
import { useDispatch } from 'react-redux';
import { openModalFeedback } from '../../../redux/slices/modalsSlice';
const TotalFooter = ({ className }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [activeModalThank, setActiveModalThank] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <div className={clsx(styles.totalFooter, className)}>
        <div className="container">
          <div className={clsx(styles.totalFooterInner, className)}>
            <div className={clsx(styles.totalFooterLabel)}>
              <span>Итого:&nbsp;</span>{' '}
              <span>{`${currencyFormat(
                _.sum(
                  Object.values(JSON.parse(localStorage['total'])).map((choice) => {
                    if (choice) {
                      return _.sumBy(Object.values(choice), function (o) {
                        return o?.price;
                      });
                    }
                  }),
                ),
              )} ₸`}</span>
            </div>
            <Button small className={clsx(styles.totalFooterBtnCheckout)} onClick={() => dispatch(openModalFeedback())}>
              Оформить
            </Button>
            {/* {activeModal && <ModalFeedback onOpenThankModal={() => setActiveModalThank(true)} onClose={() => setActiveModal(false)} />} */}
            {/* {activeModalThank && (
              <ModalThank
                onClose={() => {
                  setActiveModalThank(false);
                }}
              />
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalFooter;
