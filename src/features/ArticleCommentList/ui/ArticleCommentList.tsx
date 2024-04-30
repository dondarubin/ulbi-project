import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import {
  ReducersList, useAppDispatch, useDynamicModuleLoader, useEffectInitial,
} from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { CommentList } from 'entities/Comment';
import styles from './ArticleCommentList.module.scss';
import { articleCommentsReducer, getArticleComments } from '../model/slice/articleCommentsSlice';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../model/selectors/articleCommentsSelectors';
import { fetchArticleCommentsById } from '../model/services/fetchArticleCommentsById/fetchArticleCommentsById';

interface ArticleCommentListProps {
  className?: string;
  id: string
}

const initialReducers: ReducersList = {
  articleComments: articleCommentsReducer,
};

export const ArticleCommentList = memo(({ className, id }: ArticleCommentListProps) => {
  useDynamicModuleLoader({ reducers: initialReducers });
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleCommentsError);
  const dispatch = useAppDispatch();

  useEffectInitial(() => {
    dispatch(fetchArticleCommentsById(id));
  });

  return (
    <div className={classNames(styles.ArticleCommentList, {}, [className])}>
      <CommentList comments={comments} isLoading={isLoading} />
    </div>
  );
});