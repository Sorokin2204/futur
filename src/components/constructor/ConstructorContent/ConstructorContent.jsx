import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './ConstructorContent.module.scss';
import ConstructorHead from '../ConstructorHead.jsx/ConstructorHead';
import ConstructorInfo from '../ConstructorInfo/ConstructorInfo';
import ConstructorPackages from '../ConstructorPackages/ConstructorPackages';
import ConstructorChoice from '../ConstructorChoice/ConstructorChoice';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getCities } from '../../../redux/slices/citySlice';
import { getHouseTypes } from '../../../redux/slices/houseTypeSlice';
import { getRooms } from '../../../redux/slices/roomSlice';
import { getPackages } from '../../../redux/slices/packageSlice';
import { getPackageTypes } from '../../../redux/slices/packageTypeSlice';
import _ from 'lodash';
const ConstructorContent = () => {
  const form = useForm({
    shouldFocusError: false,
    defaultValues: {
      // package	standart-basic
      address: localStorage['address'] ?? '',
      doorsQuantity: localStorage['doorsQuantity'] ? parseInt(localStorage['doorsQuantity']) : 1,
      roomsQuantity: localStorage['roomsQuantity'] ? parseInt(localStorage['roomsQuantity']) : 1,
      bathroomsQuantity: localStorage['bathroomsQuantity'] ? parseInt(localStorage['bathroomsQuantity']) : 1,
      area: localStorage['area'] ? parseInt(localStorage['area']) : undefined,
      isNeedDismantling: localStorage['isNeedDismantling'] ? JSON.parse(localStorage['isNeedDismantling']) : false,
      isBuildWalls: localStorage['isNeedDismantling'] ? JSON.parse(localStorage['isBuildWalls']) : false,

      // city	nur-sultan
      // houseType	chastnyj-dom
      // isNeedDismantling	false
      // getItem	function getItem() { [native code] }
      // setItem	function setItem() { [native code] }
      // isBuildWalls	true
      // bathroomsQuantity	3
      // rooms
      //       address: '',
    },
  });

  const { setValue, control } = form;

  // USE_SELECTORS
  const { data: cities, loading: loadingCities, errorCities } = useSelector((state) => state.city);
  const { data: houseTypes, loading: loadingHouseTypes, error: errorHouseTypes } = useSelector((state) => state.houseType);
  const { data: rooms, loading: loadingRooms, error: errorRooms } = useSelector((state) => state.room);
  const dispatch = useDispatch();
  // USE_EFFECTS
  useEffect(() => {
    dispatch(getCities());
    dispatch(getHouseTypes());
    dispatch(getRooms());
  }, []);
  useEffect(() => {
    if (!loadingCities && !loadingHouseTypes && cities && houseTypes) {
      setValue('city', localStorage['city'] ?? cities[0].slug);
      setValue('houseType', localStorage['houseType'] ?? houseTypes[0].slug);
      setValue('ceilingHeight', localStorage['ceilingHeight'] ?? undefined);
      setValue('livingComplex', localStorage['livingComplex'] ?? '');
      setValue('address', localStorage['address'] ?? '');
    }
  }, [cities, houseTypes]);

  return (
    <>
      <div className={clsx(styles.wrapper)}>
        <ConstructorHead form={form} />
        <ConstructorInfo form={form} />
        <ConstructorPackages form={form} />
        <ConstructorChoice form={form} />
      </div>
    </>
  );
};

export default ConstructorContent;
