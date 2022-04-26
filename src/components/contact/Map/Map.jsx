import React from 'react';
import clsx from 'clsx';
import styles from './Map.module.scss';
import { contact } from '../../../data/page/contact';
import Title from '../../common/Title/Title';
const Map = () => {
  return (
    <>
      <section className={clsx(styles.map)}>
        <div className={clsx(styles.container, 'container')}>
          <Title className={clsx(styles.mapTitle)}>{contact.title}</Title>
        </div>
        <div className={clsx(styles.mapBox)}>
          <div className={clsx(styles.container, 'container')}>
            <div className={clsx(styles.mapInner)}>
              <div className={clsx(styles.mapContent)}>
                <div className={clsx(styles.mapContact)}>
                  <span className={clsx(styles.mapAddress)}>{contact.address}</span>
                  <ul className={clsx(styles.mapList)}>
                    {contact.list.map((contactItem) => (
                      <li className={clsx(styles.mapItem)}>
                        <span className={clsx(styles.mapItemTitle)}>{contactItem.title}</span>
                        <span className={clsx(styles.mapEmail)}>{contactItem.email}</span>
                        <span className={clsx(styles.mapPhone)}>{contactItem.phone}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <img src="/img/map.png" alt="" className={clsx(styles.mapImage)} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Map;
