import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './ArticleList.module.scss';
import { ArticleView, IArticleWithUserData } from '../../model/types/article.types';
import { ArticleListItem } from './components/ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from './components/ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
  className?: string;
  articles: IArticleWithUserData[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.TILE ? 4 : 2)
  .fill(0)
  .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.TILE,
    isLoading,
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
        {new Array(9)
          .fill(0)
          .map((item, index) => (
            <ArticleListItemSkeleton
              className={styles.card}
              key={index}
              view={view}
            />
          ))}
      </div>
    );
  }

  const renderArticle = (article: IArticleWithUserData) => (
    <ArticleListItem
      key={article.article_id}
      className={styles.card}
      article={article}
      view={view}
    />
  );

  return (
    <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
