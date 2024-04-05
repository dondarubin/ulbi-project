import { classNames } from 'shared/lib/classNames/classNames';
import {
  ChangeEvent,
  memo, MutableRefObject, useEffect, useRef, useState,
} from 'react';
import styles from './Input.module.scss';
import { InputProps } from './Input.types';

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    ...otherProps
  } = props;

  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;
  const [inFocused, setInFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

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

  return (
    <div className={classNames(styles.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>
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
          {...otherProps}
        />
        {inFocused && (
          <span
            className={styles.caret}
            style={{ left: `${caretPosition * 9.62}px` }}
          />
        )}
      </div>
    </div>
  );
});
