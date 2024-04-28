import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import { memo, useCallback, useMemo } from 'react';
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
    <Select
      className={classNames('', {}, [className])}
      label={t('Валюта')}
      value={value}
      options={currencyOptions}
      onChange={onChangeCurrencyHandler}
      readonly={readonly}
    />
  );
});