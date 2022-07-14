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
import { getPackages, getPackagesList, packageListSelector, packageWindowSelectSelector } from '../../../redux/slices/packageSlice';
import { useDispatch, useSelector } from 'react-redux';
import { openModalError, openModalGoBack, openModalGoBackClearStorage } from '../../../redux/slices/modalsSlice';
import { changeDetailPoint, resetRoomSingle, switchFullScreen } from '../../../redux/slices/roomSingleSlice';
import Loader from '../../common/Loader/Loader';
import useMediaQuery from '../../../utils/useMediaQuery';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import env from 'react-dotenv';

const ConstructorWindow = ({ className }) => {
  const packagesWindowSelect = useSelector((state) => packageWindowSelectSelector(state.package));
  const [roomWindowSelect, setRoomWindowSelect] = useState([]);
  const { dataList: packages, loadingList: loadingPackages, error: errorPackages, selectedPackage } = useSelector((state) => state.package);
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
    dispatch(getPackagesList());
  }, []);

  return (
    <>
      <div className={clsx(styles.window, className, fullScreen && styles.windowFullScreen)}>
        {!loadingRoomSingle &&
          !loadingRoomSingleDefault &&
          roomSingleDefault &&
          roomSingle &&
          showFurniture &&
          new Array(roomSingle?.imgWithFurnitureOnAngles?.length)
            .fill(undefined)
            .map((i, angleIndex) => (
              <img
                style={{ zIndex: roomSingle.imgWithFurnitureOnAngles[angleIndex]?.priority ?? 1 }}
                key={roomSingle.imgWithFurnitureOnAngles[angleIndex]?.image}
                className={clsx(styles.windowRoomDetailImg, angle === angleIndex && styles.windowRoomDetailImgShow)}
                src={roomSingle.imgWithFurnitureOnAngles[angleIndex]?.image}
              />
            ))}

        {!loadingRoomSingle &&
          !loadingRoomSingleDefault &&
          roomSingleDefault &&
          roomSingle &&
          new Array(roomSingle?.imgWithFurnitureOnAngles?.length).fill(undefined)?.map((i, angleIndex) => {
            return roomSingle?.details?.map((detail) => (
              <>
                {detail.positionOnAngles[angleIndex] && (
                  <RoomPoint
                    onClick={() => dispatch(changeDetailPoint(detail.slug))}
                    className={clsx(styles.windowRoomPointRadio, angle === angleIndex && styles.windowRoomPointRadioShow)}
                    label={detail.name}
                    value={detail.slug}
                    x={detail.positionOnAngles[angleIndex]?.x}
                    y={detail.positionOnAngles[angleIndex]?.y}
                  />
                )}
                {Array.from(detail?.options, ([key, value]) =>
                  value?.map((option) => {
                    if (choiceDetails?.[activeRoom?.slug]?.[key?.slug]?.slug === option?.slug && option?.fullImgOnAngels?.[angleIndex]) {
                      return (
                        <img
                          threshold={100}
                          effect="blur"
                          delayTime={50}
                          width={1500}
                          height={1000}
                          style={{ zIndex: option.fullImgOnAngels[angleIndex].priority }}
                          key={option.fullImgOnAngels[angleIndex]?.image}
                          className={clsx(styles.windowRoomDetailImg, angle === angleIndex && styles.windowRoomDetailImgShow)}
                          src={env.SERVER_URL + option.fullImgOnAngels[angleIndex]?.image}
                        />
                      );
                    }
                  }),
                )}
              </>
            ));
          })}

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
