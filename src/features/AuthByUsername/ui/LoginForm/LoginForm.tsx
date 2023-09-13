import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { ButtonTheme } from 'shared/ui/Button/Button.types';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Input
        className={styles.input}
        placeholder={t('Хранилище/пользователь/имя')}
        type="text"
        autofocus
      />
      <Input
        placeholder={t('Хранилище/пользователь/пароль')}
        className={styles.input}
        type="text"
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={styles.loginBtn}
      >
        {t('Войти')}
      </Button>
    </div>
  );
};
