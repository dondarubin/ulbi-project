import { memo, useCallback } from 'react';
import {
  ReducersList, useAppDispatch, useDynamicModuleLoader, useEffectInitial,
} from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { CommentList } from 'entities/Comment';
import { AddNewCommentForm } from 'features/AddNewComment';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import styles from './ArticleCommentList.module.scss';
import { articleCommentsReducer, getArticleComments } from '../model/slice/articleCommentsSlice';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../model/selectors/articleCommentsSelectors';
import { fetchArticleCommentsById } from '../model/services/fetchArticleCommentsById/fetchArticleCommentsById';
import { addNewCommentForArticle } from '../model/services/addNewCommentForArticle/addNewCommentForArticle';

interface ArticleCommentListProps {
  className?: string;
  id: string
}

const initialReducers: ReducersList = {
  articleComments: articleCommentsReducer,
};

export const ArticleCommentList = memo(({ className, id }: ArticleCommentListProps) => {
  const { t } = useTranslation('articles');
  useDynamicModuleLoader({ reducers: initialReducers });
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleCommentsError);
  const dispatch = useAppDispatch();

  useEffectInitial(() => {
    dispatch(fetchArticleCommentsById(id));
  });

  const onSuccessCreateNewCommentHandler = useCallback((value: string) => {
    dispatch(addNewCommentForArticle(value));
  }, [dispatch]);

  if (error) {
    return <Text theme={TextTheme.ERROR} text={t('Комментарии не найдены')} />;
  }

  return (
    <div className={classNames(styles.ArticleCommentList, {}, [className])}>
      <AddNewCommentForm onSuccessCreateNewComment={onSuccessCreateNewCommentHandler} />
      <CommentList comments={comments} isLoading={isLoading} />
    </div>
  );
});
