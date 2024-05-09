import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import {
  ReducersList, useAppDispatch, useDynamicModuleLoader, useEffectInitial,
} from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { Text, TextSize } from 'shared/ui/Text';
import { ArticleList, getArticleDetailsMounted } from 'entities/Article';
import styles from './ArticleRecommendationsList.module.scss';
import { articleRecommendationsReducer, getArticleRecommendations } from '../model/slice/articleRecommendationsSlice';
import {
  getArticleRecommendationsError,
  getArticleRecommendationsIsLoading,
} from '../model/selectors/articleRecommendationsSelectors';
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations';

interface ArticleRecommendationsListProps {
  className?: string;
  articleMounted?: boolean;
}

const initialReducers: ReducersList = {
  articleRecommendations: articleRecommendationsReducer,
};

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const {
    className,
    articleMounted,
  } = props;
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const isLoading = useSelector(getArticleRecommendationsIsLoading);
  const error = useSelector(getArticleRecommendationsError);
  useDynamicModuleLoader({ reducers: initialReducers });

  useEffectInitial(() => {
    if (articleMounted) {
      dispatch(fetchArticleRecommendations());
    }
  }, [dispatch, articleMounted]);

  if (error) {
    return (
      <div className={classNames(styles.ArticleRecommendationsList, {}, [className])}>
        <Text
          size={TextSize.L}
          className={styles.ArticleDetailsPage_comment_title}
          title={t('Рекомендуем')}
        />
        <Text
          size={TextSize.L}
          className={styles.ArticleDetailsPage_comment_title}
          title={t('Рекомендаций не найдено')}
        />
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleRecommendationsList, {}, [className])}>
      <Text
        size={TextSize.L}
        className={styles.ArticleDetailsPage_comment_title}
        title={t('Рекомендуем')}
      />
      <ArticleList
        className={styles.recommendations}
        articles={recommendations}
        isLoading={isLoading}
        target="_blank"
      />
    </div>
  );
});
