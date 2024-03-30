import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const onClickReloadPageHandler = () => {
    window.location.reload();
  };

  // todo Сделать красивую страницу
  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка!')}</p>

      <Button
        className={styles.refreshBtn}
        onClick={onClickReloadPageHandler}
        theme={ButtonTheme.OUTLINE}
      >
        {t('Обновить страницу')}
      </Button>
    </div>
  );
});
