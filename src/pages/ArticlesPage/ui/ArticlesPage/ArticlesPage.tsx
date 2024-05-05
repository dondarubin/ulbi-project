import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelect } from 'entities/Article';
import {
  ReducersList, useAppDispatch, useDynamicModuleLoader, useEffectInitial,
} from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { PageWrapper } from 'shared/ui/PageWrapper';
import { fetchNextArticlePage } from 'pages/ArticlesPage/model/services/fetchNextArticlePage/fetchNextArticlePage';
import { Text, TextTheme } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import styles from './ArticlesPage.module.scss';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPagePage,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';

interface ArticlesPageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  articlesPages: articlesPageReducer,
};

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation('articles');
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);
  const page = useSelector(getArticlesPagePage);
  useDynamicModuleLoader({ reducers: initialReducers });

  useEffectInitial(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({
      page,
    }));
  }, [dispatch]);

  const onPageEndLoadNextPartHandler = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  const onChangeViewHandler = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  if (error) {
    return (
      <PageWrapper
        className={classNames(styles.ArticlesPage, {}, [className])}
        onPageEnd={onPageEndLoadNextPartHandler}
      >
        <Text theme={TextTheme.ERROR} text={t('Ошибка при загрузке списка статей.')} />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper
      className={classNames(styles.ArticlesPage, {}, [className])}
      onPageEnd={onPageEndLoadNextPartHandler}
    >
      <ArticleViewSelect view={view} onChangeView={onChangeViewHandler} />
      <ArticleList
        isLoading={isLoading}
        view={view}
        articles={articles}
      />
    </PageWrapper>
  );
};

export default memo(ArticlesPage);
