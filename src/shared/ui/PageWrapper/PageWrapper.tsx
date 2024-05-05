import { classNames } from 'shared/lib/classNames/classNames';
import { MutableRefObject, ReactNode, useRef } from 'react';
import { useInfinityScroll } from 'shared/lib/hooks';
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

  useInfinityScroll({
    wrapperRef,
    triggerRef,
    callback: onPageEnd,
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames(styles.PageWrapper, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
