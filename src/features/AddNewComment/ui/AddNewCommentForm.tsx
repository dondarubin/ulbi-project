import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Input } from 'shared/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { ReducersList, useAppDispatch, useDynamicModuleLoader } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import styles from './AddNewCommentForm.module.scss';
import { addNewCommentFormActions, addNewCommentFormReducer } from '../model/slice/addNewCommentFormSlice';
import { getAddNewCommentFormError, getAddNewCommentFormText } from '../model/selectors/addNewCommentFormSelectors';

export interface AddNewCommentFormProps {
  className?: string;
  onSuccessCreateNewComment: (value: string) => void
}

const initialReducers: ReducersList = {
  addNewCommentForm: addNewCommentFormReducer,
};

const AddNewCommentForm = memo((props: AddNewCommentFormProps) => {
  const {
    className,
    onSuccessCreateNewComment,
  } = props;
  const { t } = useTranslation('articles');
  const commentText = useSelector(getAddNewCommentFormText);
  const error = useSelector(getAddNewCommentFormError);
  const dispatch = useAppDispatch();
  useDynamicModuleLoader({ reducers: initialReducers });

  const onChangeCommentTextHandler = useCallback((value: string) => {
    dispatch(addNewCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSuccessCreateNewComment(commentText);
    onChangeCommentTextHandler('');
  }, [commentText, onChangeCommentTextHandler, onSuccessCreateNewComment]);

  return (
    <div className={classNames(styles.AddNewCommentForm, {}, [className])}>
      <Input
        className={styles.AddNewCommentForm_input}
        value={commentText}
        onChange={onChangeCommentTextHandler}
        placeholder={t('Введите текст комментария')}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        onClick={onSendHandler}
      >
        {t('Отправить')}
      </Button>
    </div>
  );
});

export default AddNewCommentForm;