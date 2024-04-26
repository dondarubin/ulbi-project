import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ReducersList, useAppDispatch, useDynamicModuleLoader } from 'shared/lib/hooks';
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import styles from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../model/selectors/articleDetailsSelectors';

interface ArticleDetailsProps {
  className?: string;
  id: string
}

const initialReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ className, id }: ArticleDetailsProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const articleDetailsData = useSelector(getArticleDetailsData);
  useDynamicModuleLoader({ reducers: initialReducers });

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <div>
        <Skeleton className={styles.ArticleDetails_image} width={200} height={200} border="50%" />
        <Skeleton className={styles.ArticleDetails_title} width={300} height={32} />
        <Skeleton className={styles.ArticleDetails_skeleton} width={600} height={24} />
        <Skeleton className={styles.ArticleDetails_skeleton} width="100%" height={200} />
        <Skeleton className={styles.ArticleDetails_skeleton} width="100%" height={200} />
      </div>
    );
  } else if (error) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи')}
      />
    );
  } else {
    content = (
      <div>
        Art details
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleDetails, {}, [className])}>
      {content}
    </div>
  );
});
