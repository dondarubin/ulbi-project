import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { IComment } from 'entities/Comment';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment: IComment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { t } = useTranslation();
  const {
    comment,
    isLoading,
    className,
  } = props;

  if (isLoading) {
    return (
      <div className={classNames(styles.CommentCard, {}, [className])}>
        <div className={styles.CommentCard_header}>
          <Skeleton border="50%" width={30} height={30} />
          <Skeleton width={100} height={16} className={styles.CommentCard_username} />
        </div>
        <Skeleton width="100%" height={50} className={styles.CommentCard_text} />
      </div>
    );
  }

  return (
    <div className={classNames(styles.CommentCard, {}, [className])}>
      <div className={styles.CommentCard_header}>
        {comment.avatar && <Avatar size={30} src={comment.avatar} />}
        <Text className={styles.CommentCard_username} title={comment.username} />
      </div>
      <Text className={styles.CommentCard_text} text={comment.text} />
    </div>
  );
});
