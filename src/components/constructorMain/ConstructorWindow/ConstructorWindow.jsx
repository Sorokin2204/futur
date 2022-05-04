import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './ConstructorWindow.module.scss';
import ButtonWindow from '../../common/ButtonWindow/ButtonWindow';
import SelectWindow from '../../common/SelectWindow/SelectWindow';
import SwitchWindow from '../../common/SwitchWindow/SwitchWindow';
import AngleWindow from '../../common/AngleWindow/AngleWindow';
import { constructorMain } from '../../../data/page/constructor';
import ModalGoBack from '../../common/ModalGoBack/ModalGoBack';
import RoomPoint from '../../common/RoomPoint/RoomPoint';
import { roomList } from '../../../data/list/rooms';
import { packageList } from '../../../data/list/packages';
import { getPackages, packageListSelector, packageWindowSelectSelector } from '../../../redux/slices/packageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { openModalError, openModalGoBack, openModalGoBackClearStorage } from '../../../redux/slices/modalsSlice';
import { changeDetailPoint, resetRoomSingle, switchFullScreen } from '../../../redux/slices/roomSingleSlice';
import Loader from '../../common/Loader/Loader';
import useMediaQuery from '../../../utils/useMediaQuery';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ConstructorWindow = ({ className }) => {
  const packagesWindowSelect = useSelector((state) => packageWindowSelectSelector(state.package));
  const [roomWindowSelect, setRoomWindowSelect] = useState([]);
  const { data: packages, loading: loadingPackages, error: errorPackages, selectedPackage } = useSelector((state) => state.package);
  const { showFurniture, activePackage, activeRoom, fullScreen, angle, choiceDetails, data: roomSingle, loading: loadingRoomSingle, dataDefault: roomSingleDefault, loadingDefault: loadingRoomSingleDefault, error: errorRoomSingle } = useSelector((state) => state.roomSingle);
  const isMobile = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    if (errorRoomSingle) {
      dispatch(openModalError());
    }
  }, [errorRoomSingle]);

  useEffect(() => {
    if (fullScreen && isMobile) {
      dispatch(switchFullScreen());
    }
  }, [isMobile]);

  const dispatch = useDispatch();
  useEffect(() => {
    const roomsLocalStorage = Object.values(JSON.parse(localStorage['rooms'])).map((room, index) => {
      return {
        value: room.slug,
        label: room.name,
        icon: room.icon,
        parent: room.parent,
      };
    });
    setRoomWindowSelect(roomsLocalStorage);
    dispatch(getPackages());
  }, []);

  return (
    <>
      <div className={clsx(styles.window, className, fullScreen && styles.windowFullScreen)}>
        {!loadingRoomSingle && !loadingRoomSingleDefault && roomSingleDefault && roomSingle && showFurniture && roomSingle.imgWithFurnitureOnAngles[angle] && (
          <img style={{ zIndex: roomSingle.imgWithFurnitureOnAngles[angle]?.priority ?? 1 }} key={roomSingle.imgWithFurnitureOnAngles[angle].img} className={styles.windowRoomDetailImg} src={roomSingle.imgWithFurnitureOnAngles[angle].img} />
        )}
        {!loadingRoomSingle &&
          !loadingRoomSingleDefault &&
          roomSingleDefault &&
          roomSingle &&
          roomSingle.details.map((detail) => (
            <>
              {detail.positionOnAngles[angle] && <RoomPoint onClick={() => dispatch(changeDetailPoint(detail.slug))} className={clsx(styles.windowRoomPointRadio)} label={detail.name} value={detail.slug} x={detail.positionOnAngles[angle]?.x} y={detail.positionOnAngles[angle]?.y} />}
              {Array.from(detail.options, ([key, value]) =>
                value.map((option) => {
                  if (choiceDetails[activeRoom.slug][key.slug]?.slug === option.slug && option.fullImgOnAngels[angle]) {
                    return <img threshold={100} effect="blur" delayTime={50} width={1500} height={1000} style={{ zIndex: option.fullImgOnAngels[angle].priority }} key={option.fullImgOnAngels[angle]?.img} className={clsx(styles.windowRoomDetailImg)} src={option.fullImgOnAngels[angle]?.img} />;
                  }
                }),
              )}
            </>
          ))}
        <ButtonWindow
          className={clsx(styles.windowBtnBack)}
          onClick={() => {
            dispatch(openModalGoBackClearStorage());
          }}
        />
        {packagesWindowSelect && !loadingPackages && <SelectWindow package options={packagesWindowSelect} className={clsx(styles.windowSelectPackages)} />}

        {roomWindowSelect.length !== 0 && <SelectWindow options={roomWindowSelect} className={clsx(styles.windowSelectRooms)} room />}

        <SwitchWindow className={clsx(styles.windowSwithFurniture)} />
        <AngleWindow className={clsx(styles.windowAngle)} />
        <ButtonWindow
          className={clsx(styles.windowFullScreen)}
          onClick={() => {
            dispatch(switchFullScreen());
          }}
        />
      </div>
    </>
  );
};

export default ConstructorWindow;
