import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select';
import { memo, useCallback, useMemo } from 'react';
import { Country } from '../../model/types/country.types';
import { CountrySelectProps } from './CountrySelect.types';

export const CountrySelect = memo((props: CountrySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;
  const { t } = useTranslation();

  const countryOptions = useMemo(() => Object.entries(Country).map(([key, value]) => ({
    value: key,
    content: value,
  })), []);

  const onChangeCountryHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Страна')}
      value={value}
      options={countryOptions}
      onChange={onChangeCountryHandler}
      readonly={readonly}
    />
  );
});
