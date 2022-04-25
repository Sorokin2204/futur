import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ConstructorAccordionWindow.module.scss';
import AccordionWindow from '../../common/AccordionWindow/AccordionWindow';
import AccordionItemWindow from '../../common/AccordionItemWindow/AccordionItemWindow';
const ConstructorAccordionWindow = ({ name, list }) => {
  const [activeOption, setActiveOption] = useState(null);
  return (
    <>
      <AccordionWindow title={name}>
        {list.map(({ category, list }) => (
          <div className={clsx(styles.accordionsItemGroup)}>
            <div className={clsx(styles.accordionsItemCategory)}>{category}</div>
            <div className={clsx(styles.accordionsItemOptionList)}>
              {list.map((item) => (
                <AccordionItemWindow {...item} active={activeOption == item.name} onClick={() => setActiveOption(item.name)} />
              ))}
            </div>
          </div>
        ))}
      </AccordionWindow>
    </>
  );
};

export default ConstructorAccordionWindow;
