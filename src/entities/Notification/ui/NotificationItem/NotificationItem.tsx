import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Card, CardTheme } from 'shared/ui/Card';
import { Text } from 'shared/ui/Text';
import { AppLink } from 'shared/ui/AppLink';
import styles from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notifications.types';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const {
    className,
    item,
  } = props;

  const content = (
    <Card
      className={classNames(styles.NotificationItem, {}, [className])}
      theme={CardTheme.OUTLINE}
    >
      <Text title={item.title} text={item.description} />
    </Card>
  );

  if (item.href) {
    return (
      <AppLink
        className={styles.link}
        to={item.href}
        target="_blank"
      >
        {content}
      </AppLink>
    );
  }

  return content;
});
