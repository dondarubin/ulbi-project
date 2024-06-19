import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select } from '@/shared/ui/Select';
import { ListBox } from '@/shared/ui/Popups';
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

  console.log(countryOptions);

  const onChangeCountryHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  return (
    <ListBox
      className={classNames('', {}, [className])}
      selectedValue={value}
      defaultValue={t('Страна')}
      label={t('Страна')}
      items={countryOptions}
      onChange={onChangeCountryHandler}
      readonly={readonly}
      direction="top right"
    />
    // <Select
    //   className={classNames('', {}, [className])}
    //   label={t('Страна')}
    //   value={value}
    //   options={countryOptions}
    //   onChange={onChangeCountryHandler}
    //   readonly={readonly}
    // />
  );
});
