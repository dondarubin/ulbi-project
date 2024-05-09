import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article';
import {
  ReducersList, useAppDispatch, useDynamicModuleLoader, useEffectInitial,
} from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { PageWrapper } from 'widgets/PageWrapper';
import { Text, TextTheme } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import styles from './ArticlesPage.module.scss';
import { articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { ArticlesPageFilters } from './components/ArticlesPageFilters/ArticlesPageFilters';

interface ArticlesPageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = memo(({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const [searchParams] = useSearchParams();
  useDynamicModuleLoader({ reducers: initialReducers, removeAfterUnmount: false });

  useEffectInitial(() => {
    dispatch(initArticlesPage(searchParams));
  }, [dispatch]);

  const onPageEndLoadNextPartHandler = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  return (
    <PageWrapper
      className={classNames(styles.ArticlesPage, {}, [className])}
      onPageEnd={onPageEndLoadNextPartHandler}
    >
      <ArticlesPageFilters />
      <ArticleList
        className={styles.list}
        isLoading={isLoading}
        view={view}
        articles={articles}
        error={error}
      />
    </PageWrapper>
  );
});

export default ArticlesPage;
