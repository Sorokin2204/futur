import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './TotalFooter.module.scss';
import Button from '../../common/Button/Button';
import ModalFeedback from '../../common/ModalFeedback/ModalFeedback';
import ModalThank from '../../common/ModalThank/ModalThank';
import _ from 'lodash';
import { currencyFormat } from '../../../utils/currencyFormat';
import { useDispatch, useSelector } from 'react-redux';
import { openModalFeedback } from '../../../redux/slices/modalsSlice';
import { calcFormula } from '../../../utils/calcFormula';
const TotalFooter = ({ className }) => {
  const { data: totals } = useSelector((state) => state.total);
  const { data: packages } = useSelector((state) => state.package);
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
                calcFormula(
                  _.sum(
                    totals?.map((choice) => {
                      return _.sum(choice.options.map((item) => item.price));
                    }),
                  ),
                ) +
                  parseInt(localStorage['area']) * packages?.find((packageItem) => packageItem.slug === localStorage['package'])?.price,
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
