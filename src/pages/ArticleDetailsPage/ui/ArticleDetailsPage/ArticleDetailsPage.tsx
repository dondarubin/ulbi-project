import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleCommentList } from '@/features/ArticleCommentList';
import { PageWrapper } from '@/widgets/PageWrapper';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleDetails } from '@/entities/Article';
import styles from './ArticleDetailsPage.module.scss';
import { ArticlesDetailsPageHeader } from './components/ArticlesDetailsPageHeader/ArticlesDetailsPageHeader';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
  const { id } = useParams<{ id: string }>();

  // if (!id) {
  //   return (
  //     <PageWrapper className={classNames(styles.ArticleDetailsPage, {}, [className])}>
  //       <Text theme={TextTheme.ERROR} title={t('Article not found!')} text={t('Try later')} />
  //     </PageWrapper>
  //   );
  // }

  return (
    <PageWrapper className={classNames(styles.ArticleDetailsPage, {}, [className])}>
      <ArticlesDetailsPageHeader />
      <ArticleDetails id={id} />
      <ArticleRecommendationsList />
      <ArticleCommentList id={id} />
    </PageWrapper>
  );
});

export default ArticleDetailsPage;
