import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text';
import styles from './ArticleText.module.scss';
import { ArticleTextContent } from '../../../model/types/article.types';

interface ArticleTextProps {
  className?: string;
  content: ArticleTextContent
}

export const ArticleText = memo((props: ArticleTextProps) => {
  const {
    className,
    content,
  } = props;

  return (
    <div className={classNames(styles.ArticleText, {}, [className])}>
      {content.title && (
        <Text className={styles.ArticleText_title} title={content.title} />
      )}
      {content.paragraphs.map((paragraph) => (
        <Text key={paragraph} className={styles.ArticleText_paragraph} text={paragraph} />
      ))}
    </div>
  );
});
