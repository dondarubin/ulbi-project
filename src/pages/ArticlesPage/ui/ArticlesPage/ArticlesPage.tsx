import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  ReducersList, useAppDispatch, useDynamicModuleLoader, useEffectInitial,
} from '@/shared/lib/hooks';
import { PageWrapper } from '@/widgets/PageWrapper';
import { ArticleInfinityList } from './components/ArticleInfinityList/ArticleInfinityList';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import styles from './ArticlesPage.module.scss';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
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
      <ArticleInfinityList className={styles.list} />
    </PageWrapper>
  );
});

export default ArticlesPage;
