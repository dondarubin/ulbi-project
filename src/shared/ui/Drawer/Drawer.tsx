import {
  memo, ReactNode, useCallback, useEffect,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/providers';
import styles from './Drawer.module.scss';
import { Portal } from '../Portal';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const height = window.innerHeight - 100;

export const DrawerContent = memo((props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
    lazy,
  } = props;

  const { Spring, Gesture } = useAnimationLibs();

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      openDrawer();
    }
  }, [api, isOpen, openDrawer]);

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (my > 0.5 && dy > 0)) {
          close();
        } else {
          openDrawer();
        }
      } else {
        api.start({ y: my, immediate: true });
      }
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
    },
  );

  if (!isOpen) {
    return null;
  }

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  // const {
  //   onClickCloseModalHandler,
  //   isClosing,
  //   isMounted,
  //   onClickContentHandler,
  // } = useModal({
  //   animationDelay: 300,
  //   isOpen,
  //   onClose,
  // });
  //
  // const mods: Mods = {
  //   [styles.opened]: isOpen,
  //   [styles.isClosing]: isClosing,
  // };
  //
  // if (lazy && !isMounted) {
  //   return null;
  // }

  return (
    <Portal>
      <div className={classNames(styles.Drawer, {}, [className])}>
        {/* @ts-ignore */}
        <div className={styles.overlay} onClick={close}>
          <Spring.a.div
            className={styles.sheet}
            style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
            {...bind()}
          >
            {children}
          </Spring.a.div>
        </div>
      </div>
    </Portal>
    // <Portal>
    //   <div className={classNames(styles.Drawer, mods, [className])}>
    //     <div className={styles.overlay} onClick={onClickCloseModalHandler}>
    //       <div className={styles.content} onClick={onClickContentHandler}>
    //         {children}
    //       </div>
    //     </div>
    //   </div>
    // </Portal>
  );
});

const AsyncDrawer = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => (
  <AnimationProvider>
    <AsyncDrawer {...props} />
  </AnimationProvider>
);
