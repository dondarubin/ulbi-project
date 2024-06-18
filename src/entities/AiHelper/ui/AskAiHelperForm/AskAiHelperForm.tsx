import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { HStack } from 'shared/ui/Stack';
import { Input } from 'shared/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { ReducersList, useAppDispatch, useDynamicModuleLoader } from 'shared/lib/hooks';
import { getAiHelperQuestionIsLoading, getAiHelperQuestionText } from '../../model/selectors/AskAiHelperFormSelectors';
import styles from './AskAiHelperForm.module.scss';
import { aiHelperActions, aiHelperReducer } from '../../model/slice/aiHelperSlice';

interface AskAiAssistantFormProps {
  className?: string;
  onSuccess: (value: string) => void
}

const initialReducers: ReducersList = {
  aiHelper: aiHelperReducer,
};

export const AskAiHelperForm = memo((props: AskAiAssistantFormProps) => {
  const {
    className,
    onSuccess,
  } = props;
  const { t } = useTranslation('helper');
  const dispatch = useAppDispatch();
  const questionText = useSelector(getAiHelperQuestionText);
  const isLoading = useSelector(getAiHelperQuestionIsLoading);
  useDynamicModuleLoader({ reducers: initialReducers, removeAfterUnmount: false });

  const onChangeQuestionValueHandler = useCallback((value: string) => {
    dispatch(aiHelperActions.setQuestionText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSuccess(questionText);
  }, [questionText, onSuccess]);

  return (
    <HStack
      max
      justify="between"
      className={classNames(styles.AskAiAssistantForm, {}, [className])}
    >
      <Input
        className={styles.AskAiAssistantForm_input}
        placeholder={t('Задайте вопрос')}
        value={questionText}
        onChange={onChangeQuestionValueHandler}
      />
      <Button
        onClick={onSendHandler}
        theme={ButtonTheme.OUTLINE}
        disabled={isLoading}
      >
        {t('Спросить')}
      </Button>
    </HStack>
  );
});
