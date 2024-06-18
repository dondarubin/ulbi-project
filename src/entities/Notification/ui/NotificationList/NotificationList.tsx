import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { VStack } from 'shared/ui/Stack';
import { Skeleton } from 'shared/ui/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import styles from './NotificationList.module.scss';
import { useNotifications } from '../../api/notificationApi';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
  const {
    className,
  } = props;
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 5000,
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
