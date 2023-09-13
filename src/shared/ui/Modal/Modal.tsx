import { classNames } from 'shared/lib/classNames/classNames';
import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import styles from './Modal.module.scss';
import { ModalProps } from './Modal.types';

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
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const onClickCloseModalHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  function onClickContentHandler(e: React.MouseEvent) {
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

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [className])}>
        <div
          className={styles.overlay}
          onClick={onClickCloseModalHandler}
        >
          <div
            className={classNames(styles.content)}
            onClick={onClickContentHandler}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
