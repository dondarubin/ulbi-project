import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text, TextAlign } from 'shared/ui/Text';
import styles from './ArticleImage.module.scss';
import { ArticleImageContent } from '../../../../model/types/article.types';

interface ArticleImageProps {
  className?: string;
  content: ArticleImageContent
}

export const ArticleImage = memo((props: ArticleImageProps) => {
  const {
    className,
    content,
  } = props;

  return (
    <div className={classNames(styles.ArticleImage, {}, [className])}>
      <img className={styles.ArticleImage_img} src={content.imageUrl} alt="" />
      {content.imageCaption && (
        <Text text={content.imageCaption} align={TextAlign.CENTER} />
      )}
    </div>
  );
});
