import { classNames } from 'shared/lib/classNames/classNames';
import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import styles from './ListBox.module.scss';
import { Button } from '../Button';
import { HStack } from '../Stack';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom'

interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  selectedValue?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  top: styles.optionsTop,
  bottom: styles.optionsBottom,
};

export function ListBox(props: ListBoxProps) {
  const {
    className,
    items,
    defaultValue,
    selectedValue,
    onChange,
    readonly,
    direction = 'bottom',
    label,
  } = props;

  const optionsClasses = [
    mapDirectionClass[direction],
  ];

  return (
    <HStack gap="8">
      {label && (
        <span className={classNames('', { [styles.disabled]: readonly }, [])}>
          {`${label}>`}
        </span>
      )}

      <HListBox
        className={classNames(styles.ListBox, {}, [className])}
        as="div"
        value={selectedValue}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button disabled={readonly} className={styles.ListBox_btn}>
          <Button disabled={readonly}>
            {selectedValue ?? defaultValue}
          </Button>
        </HListBox.Button>

        <HListBox.Options className={classNames(styles.ListBox_options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.content}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    styles.ListBox_item,
                    {
                      [styles.active]: active,
                      [styles.disabled]: item.disabled,
                    },
                  )}
                >
                  {selected && '!!!'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
