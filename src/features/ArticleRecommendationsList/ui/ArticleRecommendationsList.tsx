import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { ArticleList, ArticleType, getArticleDetailsData } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import styles from './ArticleRecommendationsList.module.scss';
import { useArticleRecommendationsList } from '../api/recommendationApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('articles');
  const articleDetailsData = useSelector(getArticleDetailsData);

  const {
    isLoading, data: recommendations, error,
  } = useArticleRecommendationsList(articleDetailsData?.type[0] || ArticleType.ALL);

  if (error || (recommendations === undefined)) {
    return (
      <VStack gap="8" className={classNames('', {}, [className])}>
        <Text
          size={TextSize.L}
          className={styles.comment_title}
          title={t('Рекомендуем')}
        />
        <Text
          size={TextSize.L}
          className={styles.comment_title}
          title={t('Рекомендаций не найдено')}
        />
      </VStack>
    );
  }

  return (
    <VStack gap="8" className={classNames('', {}, [className])}>
      <Text
        size={TextSize.L}
        className={styles.comment_title}
        title={t('Рекомендуем')}
      />
      <ArticleList
        className={styles.recommendations}
        articles={recommendations.searchingArticles}
        isLoading={isLoading}
        target="_blank"
      />
    </VStack>
  );
});
