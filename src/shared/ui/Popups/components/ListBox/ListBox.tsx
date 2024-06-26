import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui.types';
import styles from './ListBox.module.scss';
import { Button } from '../../../Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/consts';
import popupStyle from '../../styles/popup.module.scss';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

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

export function ListBox(props: ListBoxProps) {
  const {
    className,
    items,
    defaultValue,
    selectedValue,
    onChange,
    readonly,
    direction = 'bottom right',
    label,
  } = props;

  const optionsClasses = [
    mapDirectionClass[direction],
  ];

  return (
    <HStack gap="8">
      {label && (
        <span className={classNames('', { [popupStyle.disabled]: readonly }, [])}>
          {`${label}>`}
        </span>
      )}

      <HListBox
        className={classNames(styles.ListBox, {}, [className, popupStyle.popup])}
        as="div"
        value={selectedValue}
        onChange={onChange}
        disabled={readonly}
      >
        <HListBox.Button
          disabled={readonly}
          className={popupStyle.btn}
        >
          <Button disabled={readonly}>
            {selectedValue ?? defaultValue}
          </Button>
          {/* TODO добавить иконку */}
        </HListBox.Button>

        <HListBox.Options className={classNames(styles.options, {}, optionsClasses)}>
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
                    styles.item,
                    {
                      [popupStyle.active]: active,
                      [popupStyle.disabled]: item.disabled,
                    },
                  )}
                >
                  {/* TODO добавить иконку */}
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
