import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Avatar.module.scss';
import { AvatarProps } from './Avatar.types';

export const Avatar = memo((props: AvatarProps) => {
  const {
    className,
    src,
    size,
    alt,
  } = props;

  const avatarStyles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <img
      className={classNames(styles.Avatar, {}, [className])}
      style={avatarStyles}
      src={src}
      alt={alt}
    />
  );
});
