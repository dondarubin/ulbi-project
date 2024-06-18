import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
  useCallback, useEffect, useRef, useState, MouseEvent, MutableRefObject,
} from 'react';
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

  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

  const onClickCloseModalHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  function onClickContentHandler(e: MouseEvent) {
    e.stopPropagation();
  }

  const onPressKeyDownHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClickCloseModalHandler();
    }
  }, [onClickCloseModalHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onPressKeyDownHandler);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onPressKeyDownHandler);
    };
  }, [isOpen, onPressKeyDownHandler]);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

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
