import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { useModal } from 'shared/lib/hooks';
import styles from './Drawer.module.scss';
import { Portal } from '../Portal';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;

  const {
    onClickCloseModalHandler,
    isClosing,
    isMounted,
    onClickContentHandler,
  } = useModal({
    animationDelay: 300,
    isOpen,
    onClose,
  });

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(styles.Drawer, mods, [className])}>
        <div className={styles.overlay} onClick={onClickCloseModalHandler}>
          <div className={styles.content} onClick={onClickContentHandler}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
});
