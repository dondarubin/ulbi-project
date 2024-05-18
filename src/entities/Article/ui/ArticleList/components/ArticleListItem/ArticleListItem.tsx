import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Text } from 'shared/ui/Text';
import { EyeIcon } from 'shared/assets/icons/EyeIcon/EyeIcon';
import { Card } from 'shared/ui/Card';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Avatar } from 'shared/ui/Avatar';
import { AppLink } from 'shared/ui/AppLink';
import { getRouteArticleDetails } from 'shared/constants/router';
import styles from './ArticleListItem.module.scss';
import { ArticleTextContent, IArticleWithUserData } from '../../../../model/types/article.types';
import { ArticleText } from '../../../ArticleDetails/components/ArticleText/ArticleText';
import { ArticleContentType, ArticleView } from '../../../../model/constants/articleConstants';

interface ArticleListItemProps {
  className?: string;
  article: IArticleWithUserData;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { t } = useTranslation('articles');
  const {
    className,
    article,
    view,
    target,
  } = props;

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
            <AppLink
              target={target}
              to={getRouteArticleDetails(article.article_id.toString())}
            >
              <Button theme={ButtonTheme.OUTLINE}>
                {t('Читать далее')}
              </Button>
            </AppLink>

            <Text text={String(article.views)} className={styles.views} />
            <EyeIcon color="var(--primary-color)" />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={getRouteArticleDetails(article.article_id.toString())}
      className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}
    >
      <Card>
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
    </AppLink>
  );
});
