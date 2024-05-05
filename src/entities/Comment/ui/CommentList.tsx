import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text } from 'shared/ui/Text';
import styles from './CommentList.module.scss';
import { IComment } from '../model/types/comment.types';
import { CommentCard } from './components/CommentCard/CommentCard';

interface CommentListProps {
  className?: string;
  comments?: IComment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const {
    className,
    isLoading,
    comments,
  } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(styles.CommentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(styles.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.comment_id}
            className={styles.CommentList_commentCard}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <Text text={t('Комментарии отсутствуют')} />
      )}
    </div>
  );
});
