import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';
import { getRouteProfile } from '@/shared/constants/router';
import styles from './CommentCard.module.scss';
import { IComment } from '../../../model/types/comment.types';

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
      <VStack max gap="8" className={classNames(styles.CommentCard, {}, [className])}>
        <div className={styles.CommentCard_header}>
          <Skeleton border="50%" width={30} height={30} />
          <Skeleton width={100} height={16} className={styles.CommentCard_username} />
        </div>
        <Skeleton width="100%" height={50} className={styles.CommentCard_text} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack max gap="8" className={classNames(styles.CommentCard, {}, [className])}>
      <AppLink
        className={styles.CommentCard_header}
        to={getRouteProfile(String(comment.user_id))}
      >
        {comment.avatar && <Avatar size={30} src={comment.avatar} />}
        <Text className={styles.CommentCard_username} title={comment.username} />
      </AppLink>
      <Text
        className={styles.CommentCard_text}
        text={comment.text}
      />
    </VStack>
  );
});
