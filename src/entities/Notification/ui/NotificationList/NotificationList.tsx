import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import styles from './NotificationList.module.scss';
import { useNotifications } from '../../api/notificationApi';

interface NotificationListProps {
  className?: string;
  userId: number;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const {
    className,
    userId,
  } = props;

  const { data, isLoading } = useNotifications(userId, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <VStack
        className={classNames(styles.NotificationList, {}, [className])}
        gap="16"
        max
      >
        <Skeleton width="100%" border="50px" height="80px" />
        <Skeleton width="100%" border="50px" height="80px" />
        <Skeleton width="100%" border="50px" height="80px" />
      </VStack>
    );
  }

  return (
    <VStack
      className={classNames(styles.NotificationList, {}, [className])}
      gap="16"
      max
    >
      {data?.map((item) => (
        <NotificationItem
          key={item.notificationId}
          item={item}
        />
      ))}
    </VStack>
  );
});
