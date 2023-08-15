import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Button } from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button.types';
import { LangSwitcherProps } from './LangSwitcher.types';
import styles from './LangSwitcher.mudule.scss';

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
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
};
