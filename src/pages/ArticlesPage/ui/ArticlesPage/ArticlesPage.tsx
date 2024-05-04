import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelect } from 'entities/Article';
import {
  ReducersList, useAppDispatch, useDynamicModuleLoader, useEffectInitial,
} from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import styles from './ArticlesPage.module.scss';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticlesPageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  articlesPages: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  useDynamicModuleLoader({ reducers: initialReducers });

  useEffectInitial(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  }, [dispatch]);

  const onChangeViewHandler = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  return (
    <div className={classNames(styles.ArticlesPage, {}, [className])}>
      <ArticleViewSelect view={view} onChangeView={onChangeViewHandler} />
      <ArticleList
        isLoading={isLoading}
        view={view}
        articles={articles}
      />
    </div>
  );
};

export default memo(ArticlesPage);
