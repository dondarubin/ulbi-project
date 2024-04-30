import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text';
import { ArticleCommentList } from 'features/ArticleCommentList';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        <Text theme={TextTheme.ERROR} title={t('Article not found!')} text={t('Try later')} />
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Text className={styles.ArticleDetailsPage_comment_title} title={t('Комментарии')} />
      <ArticleCommentList id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
