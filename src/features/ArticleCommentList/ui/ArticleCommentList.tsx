import { memo, useCallback } from 'react';
import {
  ReducersList, useAppDispatch, useDynamicModuleLoader, useEffectInitial,
} from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { CommentList } from 'entities/Comment';
import { AddNewCommentForm, getAddNewCommentFormValidateError, ValidateCommentErrors } from 'features/AddNewComment';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize, TextTheme } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { VStack } from 'shared/ui/Stack';
import styles from './ArticleCommentList.module.scss';
import { articleCommentsReducer, getArticleComments } from '../model/slice/articleCommentsSlice';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../model/selectors/articleCommentsSelectors';
import { fetchArticleCommentsById } from '../model/services/fetchArticleCommentsById/fetchArticleCommentsById';
import { addNewCommentForArticle } from '../model/services/addNewCommentForArticle/addNewCommentForArticle';

interface ArticleCommentListProps {
  className?: string;
  id: string;
}

const initialReducers: ReducersList = {
  articleComments: articleCommentsReducer,
};

export const ArticleCommentList = memo(({ className, id }: ArticleCommentListProps) => {
  const { t } = useTranslation('articles');
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const validateError = useSelector(getAddNewCommentFormValidateError);
  const error = useSelector(getArticleCommentsError);
  const dispatch = useAppDispatch();
  useDynamicModuleLoader({ reducers: initialReducers });

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

  return (
    <VStack
      gap="16"
      max
      className={classNames(styles.ArticleCommentList, {}, [className])}
    >
      <Text
        size={TextSize.L}
        className={styles.title}
        title={t('Комментарии')}
      />
      {validateError && (
        <Text
          theme={TextTheme.ERROR}
          text={validateErrorsTranslates[validateError]}
        />
      )}
      {/* TODO фича не может использоваься в фиче (70 урок: 16:00) */}
      <AddNewCommentForm onSuccessCreateNewComment={onSuccessCreateNewCommentHandler} />
      <CommentList comments={comments} isLoading={isLoading} />
    </VStack>
  );
});
