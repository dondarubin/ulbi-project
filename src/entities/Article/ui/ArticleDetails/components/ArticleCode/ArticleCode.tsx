import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Code } from '@/shared/ui/Code';
import { ArticleCodeContent } from '../../../../model/types/article.types';
import styles from './ArticleCode.module.scss';

interface ArticleCodeProps {
  className?: string;
  content: ArticleCodeContent
}

export const ArticleCode = memo((props: ArticleCodeProps) => {
  const {
    className,
    content,
  } = props;

  return (
    <div className={classNames(styles.ArticleCode, {}, [className])}>
      <Code codeText={content.code} />
    </div>
  );
});
