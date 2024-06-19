import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Skeleton } from '@/shared/ui/Skeleton';
import styles from './ArticleListItem.module.scss';
import { ArticleView } from '../../../../model/constants/articleConstants';

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
