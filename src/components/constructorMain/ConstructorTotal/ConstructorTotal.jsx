import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './ConstructorTotal.module.scss';
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router';
import { totalList } from '../../../data/list/totals';
import { currencyFormat } from '../../../utils/currencyFormat';
import { useSelector } from 'react-redux';
import _ from 'lodash';
const ConstructorTotal = ({ className }) => {
  const navigate = useNavigate();
  const { choiceDetails, data: roomSingle, dataDefault: roomSingleDefault, loadingDefault: loadingRoomSingleDefault, activePackage } = useSelector((state) => state.roomSingle);

  useEffect(() => {
    console.log();
  }, [roomSingle]);
  useEffect(() => {
    if (choiceDetails) {
    }
  }, [choiceDetails]);

  const onClickContinue = () => {
    localStorage['total'] = JSON.stringify(choiceDetails);
    localStorage['package'] = activePackage.value;
    navigate('/total');
  };

  return (
    <>
      <div className={clsx(styles.total, className)}>
        {!loadingRoomSingleDefault && roomSingle && roomSingleDefault && (
          <ul className={clsx(styles.totalList)}>
            <li className={clsx(styles.totalItem)}>
              <span className={clsx(styles.totalItemRoom)}>{roomSingle?.name}</span>
              <span className={clsx(styles.totalItemPrice)}>{`${currencyFormat(
                _.sumBy(Object.values(choiceDetails?.[roomSingle?.slug]), function (o) {
                  return o?.price;
                }),
              )} ₸`}</span>
            </li>

            <li className={clsx(styles.totalItem)}>
              <span className={clsx(styles.totalItemRoom)}>Итог</span>
              <span className={clsx(styles.totalItemPrice)}>{`${currencyFormat(
                _.sum(
                  Object.values(choiceDetails).map((choice) => {
                    if (choice) {
                      return _.sumBy(Object.values(choice), function (o) {
                        return o?.price;
                      });
                    }
                  }),
                ),
              )} ₸`}</span>
            </li>
          </ul>
        )}

        <Button className={clsx(styles.totalBtnContinue)} onClick={onClickContinue}>
          Продолжить
        </Button>
      </div>
    </>
  );
};

export default ConstructorTotal;
