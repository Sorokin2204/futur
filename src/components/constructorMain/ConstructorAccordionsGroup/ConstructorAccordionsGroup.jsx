import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './ConstructorAccordionsGroup.module.scss';
import AccordionItemWindow from '../../common/AccordionItemWindow/AccordionItemWindow';
import { useDispatch, useSelector } from 'react-redux';
import { selectDetail } from '../../../redux/slices/roomSingleSlice';
const ConstructorAccordionsGroup = ({ group, options }) => {
  const {
    data: { slug },
    choiceDetails,
    activeRoom,
  } = useSelector((state) => state.roomSingle);
  const dispatch = useDispatch();
  return (
    <>
      <div className={clsx(styles.accordionsItemGroup)}>
        <div className={clsx(styles.accordionsItemCategory)}>{group?.name}</div>
        <div className={clsx(styles.accordionsItemOptionList)}>
          {options.map((item) => (
            <AccordionItemWindow
              {...item}
              active={choiceDetails[activeRoom.slug][group.slug]?.slug === item.slug}
              onClick={() => {
                if (choiceDetails[activeRoom.slug][group.slug]?.slug === item.slug && item.optional) {
                  dispatch(selectDetail({ detail: null, group: group.slug }));
                } else {
                  dispatch(selectDetail({ detail: { slug: item.slug, price: item.price }, group: group.slug }));
                }
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ConstructorAccordionsGroup;
