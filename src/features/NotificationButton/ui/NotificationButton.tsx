import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { NotificationIcon } from 'shared/assets/icons/NotificationIcon/NotificationIcon';
import { NotificationList } from 'entities/Notification';
import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const {
    className,
  } = props;

  return (
    <Popover
      className={classNames(styles.NotificationButton, {}, [className])}
      direction="bottom left"
      trigger={(
        <Button theme={ButtonTheme.CLEAR}>
          <NotificationIcon color="var(--inverted-primary-color)" />
        </Button>
      )}
    >
      <NotificationList className={styles.notifications} />
    </Popover>
  );
});
