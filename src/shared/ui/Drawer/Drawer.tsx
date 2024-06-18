import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { memo, MouseEvent, ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import styles from './Drawer.module.scss';
import { Portal } from '../Portal';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;

  const mods: Mods = {
    [styles.opened]: isOpen,
  };

  function onClickContentHandler(e: MouseEvent) {
    e.stopPropagation();
  }

  return (
    <Portal>
      <div className={classNames(styles.Drawer, mods, [className])}>
        <div className={styles.overlay} onClick={onClose}>
          <div className={styles.content} onClick={onClickContentHandler}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
});
