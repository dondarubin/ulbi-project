import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { CopyIcon } from 'shared/assets/icons/CopyIcon/CopyIcon';
import { DoneIcon } from 'shared/assets/icons/DoneIcon/DoneIcon';
import styles from './Code.module.scss';

interface CodeProps {
  className?: string;
  codeText: string
}

export const Code = memo((props: CodeProps) => {
  const { className, codeText } = props;

  const onClickCopyTextHandler = useCallback(() => {
    navigator.clipboard.writeText(codeText);
  }, [codeText]);

  return (
    <pre className={classNames(styles.Code, {}, [className])}>
      <Button
        className={styles.Code_copy}
        theme={ButtonTheme.CLEAR}
        onClick={onClickCopyTextHandler}
      >
        <CopyIcon color="var(--primary-color)" />
      </Button>
      <code className={styles.Code_codeText}>
        {codeText}
      </code>
    </pre>
  );
});
