import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback, useState } from 'react';
import { Popover } from 'shared/ui/Popups';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { NotificationIcon } from 'shared/assets/icons/NotificationIcon/NotificationIcon';
import { NotificationList } from 'entities/Notification';
import { useDevice } from 'shared/lib/hooks';
import { Drawer } from 'shared/ui/Drawer';
import { AnimationProvider } from 'shared/lib/providers';
import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
  className?: string;
  userId: number;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const {
    className,
    userId,
  } = props;
  const isMobile = useDevice();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const onClickOpenDrawerHandler = useCallback(() => {
    setIsOpenDrawer(true);
  }, []);

  const onClickCloseDrawerHandler = useCallback(() => {
    setIsOpenDrawer(false);
  }, []);

  const trigger = (
    <Button theme={ButtonTheme.CLEAR} onClick={onClickOpenDrawerHandler}>
      <NotificationIcon color="var(--inverted-primary-color)" />
    </Button>
  );

  if (isMobile) {
    return (
      <>
        {trigger}
        <AnimationProvider>
          <Drawer isOpen={isOpenDrawer} onClose={onClickCloseDrawerHandler}>
            <NotificationList userId={userId} />
          </Drawer>
        </AnimationProvider>
      </>
    );
  }

  return (
    <Popover
      className={classNames(styles.NotificationButton, {}, [className])}
      direction="bottom left"
      trigger={trigger}
    >
      <NotificationList className={styles.notifications} userId={userId} />
    </Popover>
  );
});
