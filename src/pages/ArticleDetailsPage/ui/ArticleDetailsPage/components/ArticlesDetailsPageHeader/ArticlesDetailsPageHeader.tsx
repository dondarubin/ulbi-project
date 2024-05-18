import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { HStack } from 'shared/ui/Stack';
import { getRouteArticleEdit, getRouteArticles } from 'shared/constants/router';
import styles from './ArticlesDetailsPageHeader.module.scss';

interface ArticlesDetailsPageHeaderProps {
  className?: string;
}

export const ArticlesDetailsPageHeader = memo((props: ArticlesDetailsPageHeaderProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('articles');
  const navigate = useNavigate();
  const authData = useSelector(getUserAuthData);
  const currentArticle = useSelector(getArticleDetailsData);
  const canEdit = authData?.userId === currentArticle?.user_id;

  const onClickBackToArticleListHandler = useCallback(() => {
    navigate(getRouteArticles());
  }, [navigate]);

  const onClickEditArticleHandler = useCallback(() => {
    if (currentArticle) {
      navigate(getRouteArticleEdit(currentArticle.article_id.toString()));
    }
  }, [currentArticle, navigate]);

  return (
    <HStack max justify="between" className={classNames(styles.ArticlesDetailsPageHeader, {}, [className])}>
      <Button onClick={onClickBackToArticleListHandler} theme={ButtonTheme.OUTLINE}>
        {t('Назад к списку статей')}
      </Button>
      {canEdit && (
        <Button
          theme={ButtonTheme.OUTLINE}
          onClick={onClickEditArticleHandler}
        >
          {t('Редактировать')}
        </Button>
      )}
    </HStack>
  );
});
