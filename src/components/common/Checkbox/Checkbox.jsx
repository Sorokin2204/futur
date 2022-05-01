import React from 'react';
import clsx from 'clsx';
import styles from './Checkbox.module.scss';
const Checkbox = ({ label, className, icon, register, name, checked, onChange }) => {
  return (
    <>
      <label className={clsx(styles.checkboxInput, className, icon && styles.checkboxIcon)}>
        {icon && <div className={styles.checkboxIconImg} style={{ WebkitMaskImage: `url(${icon})` }} />}
        <input onClick={onChange} type={'checkbox'} className={clsx(styles.checkbox)} defaultChecked={checked} {...(typeof register == 'undefined' || register(name))} />
        <span className={clsx(styles.checkboxTextLabel)}> {label}</span>
      </label>
    </>
  );
};

export default Checkbox;
