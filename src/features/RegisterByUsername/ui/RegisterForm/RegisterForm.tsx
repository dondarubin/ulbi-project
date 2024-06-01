import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { ReducersList, useAppDispatch, useDynamicModuleLoader } from 'shared/lib/hooks';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text';
import { VStack } from 'shared/ui/Stack';
import {
  getRegisterIsLoading,
  getRegisterPassword, getRegisterReplyPassword,
  getRegisterUsername, getRegisterValidateErrors,
} from '../../model/selectors/RegisterByUsernameSelectors';
import styles from './RegisterForm.module.scss';
import { registerActions, registerReducer } from '../../model/slice/registerSlice';
import { ValidateRegisterErrors } from '../../model/consts/consts';
import { registerByUsername } from '../../model/services/registerByUsername/registerByUsername';

export interface RegisterFormProps {
  className?: string;
  onSuccessLogin: () => void;
}

// Вынесли отдельно от компонента, чтобы не создавался новый объект на каждый рендер компонента
const initialReducers: ReducersList = {
  registerForm: registerReducer,
};

const RegisterForm = memo(({ className, onSuccessLogin }: RegisterFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getRegisterUsername);
  const password = useSelector(getRegisterPassword);
  const replyPassword = useSelector(getRegisterReplyPassword);
  const isLoading = useSelector(getRegisterIsLoading);
  const validateErrors = useSelector(getRegisterValidateErrors);
  useDynamicModuleLoader({ reducers: initialReducers });

  const validateErrorsTranslates: Record<ValidateRegisterErrors, string> = {
    [ValidateRegisterErrors.USERNAME_LENGTH]: t('Имя пользователя не должно быть пустым'),
    [ValidateRegisterErrors.USERNAME_MASK]: t('Имя пользователя может состоять из латинских букв и цифр'),
    [ValidateRegisterErrors.PASSWORD_LENGTH]: t('Длина пароля должна составлять не менее 5 символов и не более чем на 20 символов меньше'),
    [ValidateRegisterErrors.PASSWORD_MASK]: t('Пароль может состоять из латинских букв, цифр и специальных символов `(.!&)`'),
    [ValidateRegisterErrors.PASSWORD_MATCHES]: t('Пароли не совпадают'),
    [ValidateRegisterErrors.NO_DATA]: t('Имя пользователя или пароль не должны быть пустыми'),
    [ValidateRegisterErrors.SERVER_ERROR]: t('Серверная ошибка'),
  };

  const onChangeUsernameHandler = useCallback((value: string) => {
    dispatch(registerActions.setUsername(value));
  }, [dispatch]);

  const onChangePasswordHandler = useCallback((value: string) => {
    dispatch(registerActions.setPassword(value));
  }, [dispatch]);

  const onChangeReplyPasswordHandler = useCallback((value: string) => {
    dispatch(registerActions.setReplyPassword(value));
  }, [dispatch]);

  const onClickRegisterHandler = useCallback(async () => {
    const result = await dispatch(registerByUsername({ username, password, replyPassword }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccessLogin();
    }
  }, [dispatch, username, password, replyPassword, onSuccessLogin]);

  return (
    <VStack gap="8" className={classNames(styles.LoginForm, {}, [className])}>
      <Text title={t('Форма регистрации')} />
      {validateErrors?.length && validateErrors.map((error) => (
        <Text
          key={error}
          theme={TextTheme.ERROR}
          text={validateErrorsTranslates[error]}
        />
      ))}
      <Input
        className={styles.input}
        placeholder={t('Имя пользователя')}
        type="text"
        value={username}
        onChange={onChangeUsernameHandler}
        autofocus
      />
      <Input
        className={styles.input}
        placeholder={t('Пароль')}
        value={password}
        onChange={onChangePasswordHandler}
        type="text"
      />
      <Input
        className={styles.input}
        placeholder={t('Повторите пароль')}
        value={replyPassword}
        onChange={onChangeReplyPasswordHandler}
        type="text"
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={styles.registerBtn}
        onClick={onClickRegisterHandler}
        disabled={isLoading}
      >
        {t('Зарегистрироваться')}
      </Button>
    </VStack>
  );
});

export default RegisterForm;
