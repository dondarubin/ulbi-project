import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select } from '@/shared/ui/Select';
import { ListBox } from '@/shared/ui/Popups';
import { CurrencySelectProps } from './CurrencySelect.types';
import { Currency } from '../../model/types/currency.types';

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;
  const { t } = useTranslation();

  const currencyOptions = useMemo(() => Object.entries(Currency).map(([key, value]) => ({
    value: key,
    content: value,
  })), []);

  const onChangeCurrencyHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <ListBox
      className={classNames('', {}, [className])}
      selectedValue={value}
      defaultValue={t('Валюта')}
      label={t('Валюта')}
      items={currencyOptions}
      onChange={onChangeCurrencyHandler}
      readonly={readonly}
      direction="top right"
    />
    // <Select
    //   className={classNames('', {}, [className])}
    //   label={t('Валюта')}
    //   value={value}
    //   options={currencyOptions}
    //   onChange={onChangeCurrencyHandler}
    //   readonly={readonly}
    // />
  );
});
