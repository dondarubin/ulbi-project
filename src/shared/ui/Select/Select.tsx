import { ChangeEvent, memo, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import styles from './Select.module.scss';
import { SelectProps } from './Select.types';

export const Select = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    label,
    options,
    value,
    onChange,
    readonly,
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  const optionsList = useMemo(() => options?.map((currentOption) => (
    <option
      className={styles.Select_option}
      value={currentOption.value}
      key={currentOption.value}
    >
      {currentOption.content}
    </option>
  )), [options]);

  const mods: Mods = {
    [styles.readonly]: readonly,
  };

  return (
    <div className={classNames(styles.SelectWrapper, mods, [className])}>
      {label && (
        <span className={styles.SelectWrapper_label}>
          {`${label}>`}
        </span>
      )}

      <select
        disabled={readonly}
        className={styles.Select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
};
