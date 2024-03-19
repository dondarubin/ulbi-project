import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { ButtonTheme } from 'shared/ui/Button/Button.types';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { TextTheme } from 'shared/ui/Text/Text.types';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const onChangeUsernameHandler = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePasswordHandler = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onClickLoginHandler = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, password, username]);

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text theme={TextTheme.ERROR} text={error} />}
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
