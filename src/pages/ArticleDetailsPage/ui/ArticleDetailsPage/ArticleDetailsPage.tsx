import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails, getArticleDetailsMounted } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text';
import { ArticleCommentList } from 'features/ArticleCommentList';
import { useSelector } from 'react-redux';
import { PageWrapper } from 'widgets/PageWrapper';
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import styles from './ArticleDetailsPage.module.scss';
import { ArticlesDetailsPageHeader } from './components/ArticlesDetailsPageHeader/ArticlesDetailsPageHeader';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles');
  const mounted = useSelector(getArticleDetailsMounted);

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <PageWrapper className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        <Text theme={TextTheme.ERROR} title={t('Article not found!')} text={t('Try later')} />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper className={classNames(styles.ArticleDetailsPage, {}, [className])}>
      <ArticlesDetailsPageHeader />
      <ArticleDetails id={id} />
      <ArticleRecommendationsList articleMounted={mounted} />
      <ArticleCommentList id={id} />
    </PageWrapper>
  );
});

export default ArticleDetailsPage;
