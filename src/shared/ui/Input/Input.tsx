import { classNames, Mods } from 'shared/lib/classNames/classNames';
import {
  ChangeEvent, memo, MutableRefObject, useEffect, useRef, useState,
} from 'react';
import styles from './Input.module.scss';
import { InputProps } from './Input.types';
import { HStack } from '../Stack';

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  } = props;

  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [inFocused, setInFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const isVisibleCaret = !readonly && inFocused;

  const onInputBlurHandler = () => {
    setInFocused(false);
  };

  const onInputFocusHandler = () => {
    setInFocused(true);
  };

  const onInputSelectHandler = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  useEffect(() => {
    if (autofocus) {
      setInFocused(true);
      inputRef.current.focus();
    }
  }, [autofocus]);

  const mods: Mods = {
    [styles.readonly]: readonly,
  };

  return (
    <HStack gap="8" max className={classNames('', mods, [className])}>
      {placeholder && (
        <div>
          {`${placeholder}>`}
        </div>
      )}
      <div className={styles.caretWrapper}>
        <input
          className={styles.input}
          ref={inputRef}
          type={type}
          value={value}
          onChange={onInputChangeHandler}
          onFocus={onInputFocusHandler}
          onBlur={onInputBlurHandler}
          onSelect={onInputSelectHandler}
          readOnly={readonly}
          {...otherProps}
        />
        {isVisibleCaret && (
          <span
            className={styles.caret}
            style={{ left: `${caretPosition * 9.62}px` }}
          />
        )}
      </div>
    </HStack>
  );
});
