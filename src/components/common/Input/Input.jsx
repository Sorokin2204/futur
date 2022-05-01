import React from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';
import { Controller } from 'react-hook-form';
import NumberFormat from 'react-number-format';
const Input = ({ className, responsive, rows, placeholder, name, register, label, smallLabel, type, control, error, rules }) => {
  return (
    <>
      <label className={clsx(styles.inputLabel, className, responsive && styles.inputLabelMobile, error && styles.inputLabelError)}>
        <div className={clsx(styles.inputBox)}>
          {type === 'textarea' ? (
            <textarea rows={rows.toString()} placeholder={placeholder} className={clsx(styles.input, styles.textarea)} {...(typeof register == 'undefined' || register(name))} autoComplete="off" />
          ) : type === 'phone' || type === 'number' ? (
            <Controller
              control={control}
              name={name}
              rules={{
                ...rules,
                ...(type === 'phone' && {
                  pattern: {
                    value: /^(8|\+7)[ ][(]\d{3}[)][ ]\d{3}[-]\d{2}[-]\d{2}$/gm,
                    message: 'Не корректный телефон',
                  },
                }),
              }}
              render={({ field: { onChange, name, value } }) => <NumberFormat className={clsx(styles.input)} {...(type !== 'phone' || { format: '+7 (###) ###-##-##', mask: '_' })} name={name} value={value} onChange={onChange} placeholder={placeholder} autoComplete="off" />}
            />
          ) : (
            <input autoComplete="off" placeholder={placeholder} className={clsx(styles.input)} {...(typeof register == 'undefined' || register(name, rules))} />
          )}
        </div>
        <span className={clsx(styles.inputTextLabel, smallLabel && styles.inputTextLabelSmall)}>{label}</span>
      </label>
    </>
  );
};

export default Input;
