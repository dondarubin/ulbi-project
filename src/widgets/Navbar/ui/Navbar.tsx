import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { useCallback, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { ButtonTheme } from 'shared/ui/Button/Button.types';
import { LoginModal } from 'features/AuthByUsername';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuth, setIsAuth] = useState(false);

  const onClickOpenLoginModalHandler = useCallback(() => {
    setIsAuth(true);
  }, []);

  const onClickCloseLoginModalHandler = useCallback(() => {
    setIsAuth(false);
  }, []);

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button
        className={classNames(styles.links, {}, [])}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onClickOpenLoginModalHandler}
      >
        {t('Войти')}
      </Button>

      <LoginModal
        isOpen={isAuth}
        onClose={onClickCloseLoginModalHandler}
      />
    </div>
  );
};
