import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text';
import { EyeIcon } from 'shared/assets/icons/EyeIcon/EyeIcon';
import { Card } from 'shared/ui/Card';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar';
import styles from './ArticleListItem.module.scss';
import {
  ArticleContentType,
  ArticleTextContent,
  ArticleView,
  IArticleWithUserData,
} from '../../../../model/types/article.types';
import { ArticleText } from '../../../ArticleDetails/components/ArticleText/ArticleText';

interface ArticleListItemProps {
  className?: string;
  article: IArticleWithUserData;
  view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { t } = useTranslation('articles');
  const navigate = useNavigate();
  const {
    className,
    article,
    view,
  } = props;

  const onClickOpenArticleHandler = useCallback(() => {
    navigate(RoutePath.article_details + article.article_id);
  }, [article.article_id, navigate]);

  // TODO написать на беке чтобы возвращались даннее о создателе статьи
  if (view === ArticleView.LIST) {
    const shortText = article.content.find((block) => block.type === ArticleContentType.TEXT) as ArticleTextContent;

    return (
      <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
        <Card>
          <div className={styles.header}>
            {article.avatar && <Avatar size={30} src={article.avatar} />}
            <Text text={article.username} className={styles.username} />
            <Text text={article.created_at} className={styles.date} />
          </div>

          <Text title={article.title} className={styles.title} />
          <Text text={article.type.join(', ')} className={styles.types} />
          <img src={article.img} alt="" className={styles.image} />

          {shortText && (
            <ArticleText content={shortText} className={styles.shortText} />
          )}

          <div className={styles.footer}>
            <Button theme={ButtonTheme.OUTLINE} onClick={onClickOpenArticleHandler}>
              {t('Читать далее')}
            </Button>

            <Text text={String(article.views)} className={styles.views} />
            <EyeIcon color="var(--primary-color)" />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
      <Card onClick={onClickOpenArticleHandler}>
        <div className={styles.imageWrapper}>
          <img src={article.img} alt="" className={styles.image} />
          <Text text={article.created_at} className={styles.date} />
        </div>

        <div className={styles.infoWrapper}>
          <Text text={article.type.join(', ')} className={styles.types} />
          <Text text={String(article.views)} className={styles.views} />
          <EyeIcon color="var(--primary-color)" />
        </div>
        <Text text={article.title} className={styles.title} />
      </Card>
    </div>
  );
});
