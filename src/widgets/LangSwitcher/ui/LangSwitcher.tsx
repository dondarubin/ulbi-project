import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { LangSwitcherProps } from './LangSwitcher.types';

// eslint-disable-next-line no-undef
export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const onClickToggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR_INVERTED}
      onClick={onClickToggleLanguage}
    >
      <span>
        {t(short ? 'Короткий язык' : 'Язык')}
      </span>
    </Button>
  );
});
