import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks';
import styles from './Modal.module.scss';
import { ModalProps } from './Modal.types';
import { Portal } from '../Portal';

const ANIMATION_DELAY = 250;

export const Modal = (props: ModalProps) => {
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
    animationDelay: ANIMATION_DELAY,
    isOpen,
    onClose,
  });

  if (lazy && !isMounted) {
    return null;
  }

  const mods: Mods = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [className])}>
        <div className={styles.overlay} onClick={onClickCloseModalHandler}>
          <div className={styles.content} onClick={onClickContentHandler}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
