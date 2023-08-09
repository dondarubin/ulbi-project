import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const onClickReloadPageHandler = () => {
    window.location.reload();
  };

  // todo Сделать красивую страницу
  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка!')}</p>

      <Button onClick={onClickReloadPageHandler}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
