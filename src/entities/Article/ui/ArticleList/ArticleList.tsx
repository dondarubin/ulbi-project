import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import styles from './ArticleList.module.scss';
import { IArticleWithUserData } from '../../model/types/article.types';
import { ArticleListItem } from './components/ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from './components/ArticleListItem/ArticleListItemSkeleton';
import { ArticleView } from '../../model/constants/articleConstants';

interface ArticleListProps {
  className?: string;
  articles: IArticleWithUserData[];
  isLoading?: boolean;
  view?: ArticleView;
  error?: string;
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
    error,
  } = props;
  const { t } = useTranslation('articles');

  if (error) {
    return (
      <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
        <Text theme={TextTheme.ERROR} text={t('Ошибка при загрузке списка статей.')} />
      </div>
    );
  }

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

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
        <Text
          align={TextAlign.CENTER}
          title={t('Совпадений не найдено')}
        />
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
