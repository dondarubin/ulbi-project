import { classNames } from 'shared/lib/classNames/classNames';
import {
  MutableRefObject, ReactNode, UIEvent, useRef,
} from 'react';
import {
  useAppDispatch, useInfinityScroll, useLayoutEffectCustom, useThrottle,
} from 'shared/lib/hooks';
import { getScrollSaveByPath, scrollSaveActions } from 'features/ScrollSave';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import styles from './PageWrapper.module.scss';

interface PageWrapperProps {
  className?: string;
  children: ReactNode;
  onPageEnd?: () => void;
}

export const PageWrapper = (props: PageWrapperProps) => {
  const {
    className,
    children,
    onPageEnd,
  } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getScrollSaveByPath(state, pathname));

  useInfinityScroll({
    wrapperRef,
    triggerRef,
    callback: onPageEnd,
  });

  useLayoutEffectCustom(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScrollHandler = useThrottle((event: UIEvent<HTMLDivElement>) => {
    dispatch(scrollSaveActions.setScrollPosition({
      path: pathname,
      position: event.currentTarget.scrollTop,
    }));
  }, 500);

  return (
    <section
      ref={wrapperRef}
      className={classNames(styles.PageWrapper, {}, [className])}
      onScroll={onScrollHandler}
    >
      {children}
      {onPageEnd && <div className={styles.trigger} ref={triggerRef} />}
    </section>
  );
};
