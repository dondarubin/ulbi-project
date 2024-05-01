import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text';
import { EyeIcon } from 'shared/assets/icons/EyeIcon/EyeIcon';
import { Card } from 'shared/ui/Card';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Skeleton } from 'shared/ui/Skeleton';
import styles from './ArticleListItem.module.scss';
import {
  ArticleContentType, ArticleTextContent, ArticleView, IArticle,
} from '../../../../model/types/article.types';
import { ArticleText } from '../../../ArticleDetails/components/ArticleText/ArticleText';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const {
    className,
    view,
  } = props;

  if (view === ArticleView.LIST) {
    return (
      <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
        <Card>
          <div className={styles.header}>
            <Skeleton border="50%" width={30} height={30} />
            <Skeleton width={150} height={16} className={styles.username} />
            <Skeleton width={150} height={16} className={styles.date} />
          </div>

          <Skeleton width={250} height={24} className={styles.title} />
          <Skeleton height={200} className={styles.image} />

          <div className={styles.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
      <Card>
        <div className={styles.imageWrapper}>
          <Skeleton width={200} height={200} className={styles.image} />
        </div>

        <div className={styles.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={styles.title} />
      </Card>
    </div>
  );
});
