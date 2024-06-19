import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { ReducersList, useAppDispatch, useDynamicModuleLoader } from '@/shared/lib/hooks';
import { HStack } from '@/shared/ui/Stack';
import styles from './AddNewCommentForm.module.scss';
import { addNewCommentFormActions, addNewCommentFormReducer } from '../model/slice/addNewCommentFormSlice';
import { getAddNewCommentFormText } from '../model/selectors/addNewCommentFormSelectors';

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
  const dispatch = useAppDispatch();
  useDynamicModuleLoader({ reducers: initialReducers });

  const onChangeCommentTextHandler = useCallback((value: string) => {
    dispatch(addNewCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSuccessCreateNewComment(commentText);
  }, [commentText, onSuccessCreateNewComment]);

  return (
    <HStack
      max
      justify="between"
      className={classNames(styles.AddNewCommentForm, {}, [className])}
    >
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
    </HStack>
  );
});

export default AddNewCommentForm;
