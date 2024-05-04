import { memo, useCallback } from 'react';
import {
  ReducersList, useAppDispatch, useDynamicModuleLoader, useEffectInitial,
} from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { CommentList } from 'entities/Comment';
import { AddNewCommentForm, ValidateCommentErrors } from 'features/AddNewComment';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { getAddNewCommentFormValidateError } from 'features/AddNewComment/model/selectors/addNewCommentFormSelectors';
import styles from './ArticleCommentList.module.scss';
import { articleCommentsReducer, getArticleComments } from '../model/slice/articleCommentsSlice';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../model/selectors/articleCommentsSelectors';
import { fetchArticleCommentsById } from '../model/services/fetchArticleCommentsById/fetchArticleCommentsById';
import { addNewCommentForArticle } from '../model/services/addNewCommentForArticle/addNewCommentForArticle';

interface ArticleCommentListProps {
  className?: string;
  id: string;
  error?: string
}

const initialReducers: ReducersList = {
  articleComments: articleCommentsReducer,
};

export const ArticleCommentList = memo(({ className, id, error }: ArticleCommentListProps) => {
  const { t } = useTranslation('articles');
  useDynamicModuleLoader({ reducers: initialReducers });
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const validateError = useSelector(getAddNewCommentFormValidateError);
  // const error = useSelector(getArticleCommentsError);
  const dispatch = useAppDispatch();

  // TODO написать нормальные переводы
  const validateErrorsTranslates: Record<ValidateCommentErrors, string> = {
    [ValidateCommentErrors.SERVER_ERROR]: t('Серверная ошибка'),
    [ValidateCommentErrors.INCORRECT_DATA]: t('Текст комментария не должен быть более 500 символов'),
    [ValidateCommentErrors.NO_DATA]: t('Текст комментария обезателен'),
  };

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
      {validateError && (
        <Text
          theme={TextTheme.ERROR}
          text={validateErrorsTranslates[validateError]}
        />
      )}
      <AddNewCommentForm onSuccessCreateNewComment={onSuccessCreateNewCommentHandler} />
      <CommentList comments={comments} isLoading={isLoading} />
    </div>
  );
});
