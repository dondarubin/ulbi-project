import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { IComment } from 'entities/Comment';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  comment?: IComment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
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

  if (!comment) {
    return null;
  }

  return (
    <div className={classNames(styles.CommentCard, {}, [className])}>
      <AppLink className={styles.CommentCard_header} to={`${RoutePath.profile}${comment.user_id}`}>
        {comment.avatar && <Avatar size={30} src={comment.avatar} />}
        <Text className={styles.CommentCard_username} title={comment.username} />
      </AppLink>
      <Text className={styles.CommentCard_text} text={comment.text} />
    </div>
  );
});
