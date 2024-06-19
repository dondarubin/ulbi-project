import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const {
    width,
    height,
    border,
    className,
  } = props;

  const skeletonStyles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      className={classNames(styles.Skeleton, {}, [className])}
      style={skeletonStyles}
    />
  );
});
