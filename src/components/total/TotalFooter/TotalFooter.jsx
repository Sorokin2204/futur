import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './TotalFooter.module.scss';
import Button from '../../common/Button/Button';
import ModalFeedback from '../../common/ModalFeedback/ModalFeedback';
import ModalThank from '../../common/ModalThank/ModalThank';
const TotalFooter = ({ className }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [activeModalThank, setActiveModalThank] = useState(false);
  return (
    <>
      <div className={clsx(styles.totalFooter, className)}>
        <div className="container">
          <div className={clsx(styles.totalFooterInner, className)}>
            <div className={clsx(styles.totalFooterLabel)}>
              <span>Итого:&nbsp;</span> <span>1 278 900 ₸</span>
            </div>
            <Button small className={clsx(styles.totalFooterBtnCheckout)} onClick={() => setActiveModal(true)}>
              Оформить
            </Button>
            {activeModal && <ModalFeedback onOpenThankModal={() => setActiveModalThank(true)} onClose={() => setActiveModal(false)} />}
            {activeModalThank && (
              <ModalThank
                onClose={() => {
                  setActiveModalThank(false);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalFooter;
