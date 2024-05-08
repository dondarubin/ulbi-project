import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, getArticleDetailsMounted } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text, TextTheme } from 'shared/ui/Text';
import { ArticleCommentList } from 'features/ArticleCommentList';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { PageWrapper } from 'widgets/PageWrapper';
import { ArticleRecommendationsList } from 'features/ArticleRecommendationsList';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articles');
  const navigate = useNavigate();
  const mounted = useSelector(getArticleDetailsMounted);

  const { id } = useParams<{ id: string }>();

  const onClickBackToArticleListHandler = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  if (!id) {
    return (
      <PageWrapper className={classNames(styles.ArticleDetailsPage, {}, [className])}>
        <Text theme={TextTheme.ERROR} title={t('Article not found!')} text={t('Try later')} />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper className={classNames(styles.ArticleDetailsPage, {}, [className])}>
      <Button onClick={onClickBackToArticleListHandler} theme={ButtonTheme.OUTLINE}>
        {t('Назад к списку статей')}
      </Button>
      <ArticleDetails id={id} />
      <ArticleRecommendationsList mounted={mounted} />
      <ArticleCommentList id={id} />
    </PageWrapper>
  );
};

export default memo(ArticleDetailsPage);
