import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui.types';
import { AppLink } from 'shared/ui/AppLink';
import styles from './Dropdown.module.scss';

export interface DropdownItem {
  content?: ReactNode;
  onClick?: ()=>void;
  href?: string;
  disabled?: boolean;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'top left': styles.optionsTopLeft,
  'top right': styles.optionsTopRight,
  'bottom left': styles.optionsBottomLeft,
  'bottom right': styles.optionsBottomRight,
};

export function Dropdown(props: DropdownProps) {
  const {
    className,
    items,
    trigger,
    direction = 'bottom right',
  } = props;

  const menuClasses = [
    mapDirectionClass[direction],
  ];

  return (
    <Menu
      as="div"
      className={classNames(styles.Dropdown, {}, [className])}
    >
      <Menu.Button
        className={styles.btn}
      >
        {trigger}
      </Menu.Button>
      <Menu.Items className={classNames(styles.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: {active: boolean}) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(styles.item, { [styles.active]: active })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
}
