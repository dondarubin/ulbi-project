import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { PageWrapper } from 'widgets/PageWrapper';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();

  return (
    <PageWrapper className={classNames(styles.NotFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </PageWrapper>
  );
};

export default memo(NotFoundPage);
