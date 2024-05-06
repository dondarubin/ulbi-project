import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelect } from 'entities/Article';
import {
  ReducersList,
  useAppDispatch,
  useDynamicModuleLoader,
  useEffectInitial,
} from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { PageWrapper } from 'widgets/PageWrapper';
import { Text, TextTheme } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import styles from './ArticlesPage.module.scss';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slice/articlesPageSlice';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageMounted,
  getArticlesPagePage,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';

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
  useDynamicModuleLoader({ reducers: initialReducers, removeAfterUnmount: false });

  useEffectInitial(() => {
    dispatch(initArticlesPage());
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
