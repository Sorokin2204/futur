import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './ConstructorChoice.module.scss';
import Button from '../../common/Button/Button';
import { useNavigate } from 'react-router';
import { showAlert } from '../../../utils/showAlert';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert } from '../../../redux/slices/alertSlice';
import logger from 'sass-resources-loader/lib/utils/logger';
import _ from 'lodash';
const ConstructorChoice = ({ form }) => {
  const { handleSubmit, watch, trigger } = form;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let selectedCity = useRef(null);
  let selectedHouseType = useRef(null);
  const [choices, setChoices] = useState([]);
  const { data: rooms } = useSelector((state) => state.room);
  const { data: cities } = useSelector((state) => state.city);
  const { selectedPackage } = useSelector((state) => state.package);
  const { data: houseTypes } = useSelector((state) => state.houseType);

  const watchFields = watch();
  const updateChoice = ({ area, city, address, ceilingHeight, houseType, bathroomsQuantity, doorsQuantity, isBuildWalls, isNeedDismantling, livingComplex, roomsQuantity }) => {
    let choice = [];
    choice.push(`${city}`);
    choice.push(`${houseType?.toLowerCase()}`);
    if (address) {
      choice.push(`${address}`);
    }
    if (livingComplex) {
      choice.push(`${livingComplex}`);
    }
    choice.push(`${roomsQuantity}-комнатная`);
    if (area) {
      choice.push(`площадь ${area} м²`);
    }
    if (ceilingHeight) {
      choice.push(`высота потолков ${ceilingHeight} м`);
    }
    choice.push(`кол-во дверей: ${doorsQuantity}`);
    choice.push(`кол-во санузлов: ${bathroomsQuantity}`);
    if (isBuildWalls) {
      choice.push(`нужно возвести стены`);
    }
    if (isNeedDismantling) {
      choice.push(`нужен демонтаж`);
    }
    return choice;
  };

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name == 'city') {
        selectedCity.current = cities.find((city) => city.slug === value.city);
      } else if (name === 'houseType') {
        selectedHouseType.current = houseTypes.find((houseType) => houseType.slug === value.houseType);
      }
      let city = selectedCity.current?.name;
      let houseType = selectedHouseType.current?.name;
      setChoices(updateChoice({ ...value, city, houseType }));
    });
    return () => subscription.unsubscribe();
  }, [watchFields]);
  const onSubmitError = (e) => {
    console.log(e);
    showAlert('error', 'Заполните пустые поля');
  };
  const onSubmit = (d) => {
    const checkedRooms = rooms.filter((room) => room.checked === true);
    if (checkedRooms.length === 0) {
      showAlert('error', 'Выберите минимум одну комнату');
    } else if (!selectedPackage) {
      showAlert('error', 'Выберите пакет');
    } else {
      for (let key of Object.keys(d)) {
        localStorage.setItem(key, d[key]);

        // console.log(d[key]);
      }
      const selectedRooms = rooms.filter;
      const roomsInLocalStorage = checkedRooms.map((room) => _.pick(room, ['slug', 'icon', 'name', 'order', 'parent', 'number']));
      localStorage.setItem('rooms', JSON.stringify(roomsInLocalStorage));
      localStorage.setItem('package', selectedPackage.slug);
      console.log(d);
      showAlert('success', 'Данные успешно сохранены');
    }
  };
  return (
    <>
      <div className={clsx(styles.choice)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.choiceInner)}>
            <div className={clsx(styles.choiceBox)}>
              <span className={clsx(styles.choiceTitle)}>Ваш выбор:</span>
              <p className={clsx(styles.choiceText)}>{choices.join(', ')}</p>
            </div>
            <Button className={clsx(styles.choiceBtn)} small onClick={handleSubmit(onSubmit, onSubmitError)}>
              Продолжить
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstructorChoice;
