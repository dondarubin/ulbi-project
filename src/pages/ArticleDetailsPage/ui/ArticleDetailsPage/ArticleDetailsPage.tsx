import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles');

  return (
    <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
      ArticleDetailsPage
    </div>
  );
};

export default memo(ArticleDetailsPage);
