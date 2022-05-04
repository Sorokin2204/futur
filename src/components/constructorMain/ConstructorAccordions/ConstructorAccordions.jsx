import React from 'react';
import clsx from 'clsx';
import styles from './ConstructorAccordions.module.scss';
import { constructorMain } from '../../../data/page/constructor';
import AccordionItemWindow from '../../common/AccordionItemWindow/AccordionItemWindow';
import AccordionWindow from '../../common/AccordionWindow/AccordionWindow';
import ConstructorAccordionWindow from '../ConstructorAccordionWindow/ConstructorAccordionWindow';
import { useSelector } from 'react-redux';
const ConstructorAccordions = ({ className }) => {
  const { data: roomSingle, loading: loadingRoomSingle, dataDefault: roomSingleDefault, loadingDefault: loadingRoomSingleDefault, error: errorRoomSingle } = useSelector((state) => state.roomSingle);
  return (
    <div className={clsx(styles.accordions, className)}>
      <ul className={clsx(styles.accordionsList)}>
        {!loadingRoomSingle &&
          !loadingRoomSingleDefault &&
          roomSingleDefault &&
          roomSingle &&
          roomSingle.details.map((detail) => {
            return <ConstructorAccordionWindow name={detail.name} list={detail.options} slug={detail.slug} />;
          })}
      </ul>
    </div>
  );
};

export default ConstructorAccordions;
