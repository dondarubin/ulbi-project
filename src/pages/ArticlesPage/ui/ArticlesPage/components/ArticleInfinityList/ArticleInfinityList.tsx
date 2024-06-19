import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { getArticles } from '../../../../model/slice/articlesPageSlice';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../../../../model/selectors/articlesPageSelectors';
import styles from './ArticleInfinityList.module.scss';

interface ArticleInfinityListProps {
  className?: string;
}

export const ArticleInfinityList = memo((props: ArticleInfinityListProps) => {
  const {
    className,
  } = props;
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  return (
    <ArticleList
      className={classNames(styles.list, {}, [className])}
      isLoading={isLoading}
      view={view}
      articles={articles}
      error={error}
    />
  );
});
