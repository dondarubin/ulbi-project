import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch, useDebounce } from '@/shared/lib/hooks';
import {
  ArticleSortField,
  ArticleSortSelect,
  ArticleType,
  ArticleTypeTabs,
  ArticleView,
  ArticleViewSelect,
} from '@/entities/Article';
import { Input } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/Card';
import { SortOrder } from '@/shared/constants/sort';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
  getArticlesPageView,
} from '../../../../model/selectors/articlesPageSelectors';
import styles from './ArticlesPageFilters.module.scss';
import { articlesPageActions } from '../../../../model/slice/articlesPageSlice';
import { fetchArticlesList } from '../../../../model/services/fetchArticlesList/fetchArticlesList';

interface ArticlesPageFiltersProps {
  className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('articles');
  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const type = useSelector(getArticlesPageType);
  const dispatch = useAppDispatch();

  const fetchSortedArticleData = useCallback(() => {
    dispatch(fetchArticlesList({ replaceData: true }));
  }, [dispatch]);

  const debouncedFetchSortedArticleData = useDebounce(fetchSortedArticleData, 500);

  const onChangeViewHandler = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view));
  }, [dispatch]);

  const onChangeSortHandler = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort));
    dispatch(articlesPageActions.setPage(1));
    fetchSortedArticleData();
  }, [dispatch, fetchSortedArticleData]);

  const onChangeOrderHandler = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder));
    dispatch(articlesPageActions.setPage(1));
    fetchSortedArticleData();
  }, [dispatch, fetchSortedArticleData]);

  const onChangeSearchHandler = useCallback((value: string) => {
    dispatch(articlesPageActions.setSearch(value));
    dispatch(articlesPageActions.setPage(1));
    debouncedFetchSortedArticleData();
  }, [debouncedFetchSortedArticleData, dispatch]);

  const onChangeTabHandler = useCallback((articleType: ArticleType) => {
    dispatch(articlesPageActions.setType(articleType));
    dispatch(articlesPageActions.setPage(1));
    fetchSortedArticleData();
  }, [dispatch, fetchSortedArticleData]);

  return (
    <div className={classNames(styles.ArticlesPageFilters, {}, [className])}>
      <div className={styles.sortWrapper}>
        <ArticleSortSelect
          order={order}
          sort={sort}
          onChangeSort={onChangeSortHandler}
          onChangeOrder={onChangeOrderHandler}
        />
        <ArticleViewSelect
          view={view}
          onChangeView={onChangeViewHandler}
        />
      </div>

      <Card className={styles.search}>
        <Input
          placeholder={t('Поиск')}
          value={search}
          onChange={onChangeSearchHandler}
        />
      </Card>

      <ArticleTypeTabs
        className={styles.tabs}
        selectedType={type}
        onChangeType={onChangeTabHandler}
      />
    </div>
  );
});
