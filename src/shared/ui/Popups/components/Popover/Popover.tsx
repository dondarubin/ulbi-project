import { memo, ReactNode } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui.types';
import styles from './Popover.module.scss';
import popupStyles from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/consts';

interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
  children?: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
  const {
    className,
    direction = 'bottom right',
    trigger,
    children,
  } = props;

  const menuClasses = [
    mapDirectionClass[direction],
  ];

  return (
    <HPopover className={classNames(styles.Popover, {}, [className, popupStyles.popup])}>
      <HPopover.Button className={popupStyles.btn}>
        {trigger}
      </HPopover.Button>

      <HPopover.Panel className={classNames(styles.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
});
