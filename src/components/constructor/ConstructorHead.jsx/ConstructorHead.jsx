import React, { useEffect } from 'react';
import clsx from 'clsx';
import styles from './ConstructorHead.module.scss';
import Counter from '../../common/Counter/Counter';
import Input from '../../common/Input/Input';
import Radio from '../../common/Radio/Radio';
import { common } from '../../../data/common';
import { useDispatch, useSelector } from 'react-redux';
import { getCities } from '../../../redux/slices/citySlice';
import { getHouseTypes } from '../../../redux/slices/houseTypeSlice';
const ConstructorHead = ({ form }) => {
  const {
    getValues,
    register,
    setValue,
    watch,
    formState: { errors },
  } = form;
  const { data: cities, loading: loadingCities, errorCities } = useSelector((state) => state.city);
  const { data: houseTypes, loading: loadingHouseTypes, error: errorHouseTypes } = useSelector((state) => state.houseType);

  const watchHouseType = watch('houseType');
  const watchroomsQuantity = watch('roomsQuantity');

  React.useEffect(() => {
    // setValue('address', '');
    // setValue('livingComplex', '');
    // setValue('ceilingHeight', undefined);
  }, [watchHouseType]);
  const onClickHouseType = () => {
    setValue('address', '');
    setValue('livingComplex', '');
    setValue('ceilingHeight', undefined);
  };

  return (
    <>
      <div className={clsx(styles.head)}>
        <div className={clsx(styles.container, 'container')}>
          <div className={clsx(styles.headInner)}>
            <div className={clsx(styles.headPlan)} style={{ backgroundImage: `url(${common.planImgTwo})` }}></div>
            <div className={clsx(styles.headContent)}>
              <h3 className={clsx(styles.headTitle)}>Конструктор ремонта квартиры</h3>
              <p className={clsx(styles.headText)}>Расчёт ремонта квартиры онлайн. Укажите параметры вашей квартиры, затем в конструкторе выберите планируемый дизайн квартиры, далее укажите необходимые дополнительные опции.</p>
              <div className={clsx(styles.headCity)}>
                <span className={clsx(styles.headCityLabel)}>Город</span>

                {!loadingCities && cities && (
                  <div className={clsx(styles.headCityBox)}>
                    {cities?.map((city) => (
                      <Radio label={city.name} value={city.slug} name="city" block register={register} />
                    ))}
                  </div>
                )}
              </div>

              {!loadingHouseTypes && houseTypes && (
                <div className={clsx(styles.headCityBox)}>
                  {houseTypes?.map((houseType) => (
                    <Radio onClick={onClickHouseType} register={register} label={houseType.name} value={houseType.slug} name="houseType" />
                  ))}
                </div>
              )}

              {watchHouseType === 'chastnyj-dom' ? (
                <Input
                  rules={{
                    required: true,
                  }}
                  error={errors.address}
                  register={register}
                  name="address"
                  responsive
                  label="Адрес"
                  placeholder="Напишите ваш адрес"
                  className={clsx(styles.headComplexInput)}
                />
              ) : (
                <Input
                  rules={{
                    required: true,
                  }}
                  error={errors.livingComplex}
                  register={register}
                  name="livingComplex"
                  responsive
                  label="Жилой комплекс"
                  placeholder="Название жилого комплекса"
                  className={clsx(styles.headComplexInput)}
                />
              )}

              <Counter watch={watch} label={'Количество комнат'} className={clsx(styles.headComplexCounter)} afterText="-комнатная" register={register} name="roomsQuantity" setValue={setValue} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstructorHead;
