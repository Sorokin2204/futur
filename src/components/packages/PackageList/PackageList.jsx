import React from 'react';
import clsx from 'clsx';
import styles from './PackageList.module.scss';
import Title from '../../common/Title/Title';
import Filter from '../../common/Filter/Filter';
import { packageList, typePackageList } from '../../../data/list/packages';
import FilterItem from '../../common/FilterItem/FilterItem';
import Package from '../../common/Package/Package';
import { useEffect } from 'react';
import { useState } from 'react';
import _ from 'lodash';
const PackageList = () => {
  const [groupByTypePackage, setGroupByTypePackage] = useState([]);
  const [showPackages, setShowPackages] = useState([]);
  const [activeType, setActiveType] = useState(null);
  useEffect(() => {
    setGroupByTypePackage(_.groupBy(packageList, (packageItem) => packageItem.category));
  }, []);

  useEffect(() => {
    if (groupByTypePackage.length !== 0) {
      setActiveType('all');
    }
  }, [groupByTypePackage]);

  useEffect(() => {
    if (activeType === 'all') {
      setShowPackages(groupByTypePackage);
    } else {
      if (groupByTypePackage[activeType]) {
        setShowPackages({ [`${activeType}`]: groupByTypePackage[activeType] });
      }
    }
  }, [activeType]);

  useEffect(() => {}, [showPackages]);

  return (
    <>
      <div className={clsx(styles.packageList)}>
        <div className={clsx(styles.container, 'container')}>
          <Title className={clsx(styles.packageTitle)}>Пакеты</Title>
          <Filter className={clsx(styles.packageListFilter)}>
            {typePackageList.map((type, index) => (
              <FilterItem active={type.slug === activeType} onClick={() => setActiveType(type.slug)}>
                {type.name}
              </FilterItem>
            ))}
          </Filter>
          <ul className={clsx(styles.packageListGroup)}>
            {Object.keys(showPackages).length !== 0 &&
              Object.keys(showPackages)?.map((typePackage, i) => (
                <li className={clsx(styles.packageListGroupItem)}>
                  <h3 className={clsx(styles.packageListGroupTitle)}>{typePackageList.find((type) => type.slug === typePackage).name}</h3>
                  <div className={clsx(styles.packageListGroupWrapper)}>
                    <ul className={clsx(styles.packageListGroupList)}>
                      {showPackages[typePackage]?.map((packageItem) => (
                        <Package {...packageItem} className={clsx(styles.packageListGroupPackage)} />
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PackageList;
