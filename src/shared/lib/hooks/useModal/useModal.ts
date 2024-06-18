import {
  MouseEvent, MutableRefObject, useCallback, useEffect, useRef, useState,
} from 'react';

interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay: number;
}

export function useModal(props: UseModalProps) {
  const {
    onClose,
    isOpen,
    animationDelay,
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
      }, animationDelay);
    }
  }, [animationDelay, onClose]);

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

  return {
    isClosing,
    isMounted,
    onClickCloseModalHandler,
    onClickContentHandler,
  };
}
