import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
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
    navigate(RoutePath.articles);
  }, [navigate]);

  const onClickEditArticleHandler = useCallback(() => {
    navigate(`${RoutePath.article_edit}${currentArticle?.article_id}`);
  }, [currentArticle?.article_id, navigate]);

  return (
    <div className={classNames(styles.ArticlesDetailsPageHeader, {}, [className])}>
      <Button onClick={onClickBackToArticleListHandler} theme={ButtonTheme.OUTLINE}>
        {t('Назад к списку статей')}
      </Button>
      {canEdit && (
        <Button
          className={styles.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onClickEditArticleHandler}
        >
          {t('Редактировать')}
        </Button>
      )}
    </div>
  );
});