import React from 'react';
import clsx from 'clsx';
import styles from './Overlay.module.scss';
import { useDispatch } from 'react-redux';
import { closeAllModal } from '../../../redux/slices/modalsSlice';

const Overlay = ({ onAfterClose, closes, style, light }) => {
  const dispatch = useDispatch();

  const onClickOverlay = () => {
    dispatch(closeAllModal());
    onAfterClose?.();
  };

  return <div {...(!closes || { onClick: onClickOverlay })} style={style} className={clsx(styles.overlay, light && styles.overlayWhite)}></div>;
};

export default Overlay;
