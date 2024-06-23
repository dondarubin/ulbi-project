import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { RatingCard } from '@/entities/Rating';
import { useGetArticleRating, useRateArticle } from '../api/articleRatingApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';

export interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
  const {
    className,
    articleId,
  } = props;
  const { t } = useTranslation('articles');
  const userData = useSelector(getUserAuthData);

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: Number(userData?.userId),
  });

  const [rateArticleMutation] = useRateArticle();

  const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
    try {
      rateArticleMutation({
        userId: Number(userData?.userId),
        articleId,
        rate: starsCount,
        feedback,
      });
    } catch (e) {
      console.log(e);
    }
  }, [articleId, rateArticleMutation, userData?.userId]);

  const onAcceptHandler = useCallback((starsCount: number, feedback?: string) => {
    handleRateArticle(starsCount, feedback);
  }, [handleRateArticle]);

  const onCancelHandler = useCallback((starsCount: number) => {
    handleRateArticle(starsCount);
  }, [handleRateArticle]);

  if (isLoading) {
    return (
      <Skeleton width="100%" height={120} />
    );
  }

  return (
    <RatingCard
      rate={data?.rate}
      className={classNames('', {}, [className])}
      title={t('Как вам статья?')}
      feedbackTitle={t('Напишите пару слов о статье!')}
      onAccept={onAcceptHandler}
      onCancel={onCancelHandler}
      hasFeedback
    />
  );
});

export default ArticleRating;
