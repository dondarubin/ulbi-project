import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { ReducersList, useAppDispatch, useDynamicModuleLoader } from 'shared/lib/hooks';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text, TextTheme } from 'shared/ui/Text';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginValidateErrors } from '../../model/selectors/getLoginValidateErrors/getLoginValidateErrors';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';
import { ValidateLoginErrors } from '../../model/consts/consts';

export interface LoginFormProps {
  className?: string;
  onSuccessLogin: () => void;
}

// Вынесли отдельно от компонента, чтобы не создавался новый объект на каждый рендер компонента
const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccessLogin }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const validateErrors = useSelector(getLoginValidateErrors);
  useDynamicModuleLoader({ reducers: initialReducers });

  const validateErrorsTranslates: Record<ValidateLoginErrors, string> = {
    [ValidateLoginErrors.USERNAME_LENGTH]: t('Имя пользователя не должно быть пустым'),
    [ValidateLoginErrors.USERNAME_MASK]: t('Имя пользователя может состоять из латинских букв и цифр'),
    [ValidateLoginErrors.PASSWORD_LENGTH]: t('Длина пароля должна составлять не менее 5 символов и не более чем на 20 символов меньше'),
    [ValidateLoginErrors.PASSWORD_MASK]: t('Пароль может состоять из латинских букв, цифр и специальных символов `(.!&)`'),
    [ValidateLoginErrors.NO_DATA]: t('Имя пользователя или пароль не должны быть пустыми'),
    [ValidateLoginErrors.SERVER_ERROR]: t('Серверная ошибка'),
  };

  const onChangeUsernameHandler = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePasswordHandler = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onClickLoginHandler = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccessLogin();
    }
  }, [dispatch, password, username, onSuccessLogin]);

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
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
      <Button
        theme={ButtonTheme.OUTLINE}
        className={styles.loginBtn}
        onClick={onClickLoginHandler}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </div>
  );
});

export default LoginForm;
