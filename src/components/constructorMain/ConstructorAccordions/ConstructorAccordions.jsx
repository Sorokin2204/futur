import React from 'react';
import clsx from 'clsx';
import styles from './ConstructorAccordions.module.scss';
import { constructorMain } from '../../../data/page/constructor';
import AccordionItemWindow from '../../common/AccordionItemWindow/AccordionItemWindow';
import AccordionWindow from '../../common/AccordionWindow/AccordionWindow';
import ConstructorAccordionWindow from '../ConstructorAccordionWindow/ConstructorAccordionWindow';
const ConstructorAccordions = ({ className }) => {
  return (
    <div className={clsx(styles.accordions, className)}>
      <ul className={clsx(styles.accordionsList)}>
        {constructorMain.rooms[0].furnitures.map((furniture) => (
          <ConstructorAccordionWindow name={furniture.name} list={furniture.options} />
        ))}
      </ul>
    </div>
  );
};

export default ConstructorAccordions;
