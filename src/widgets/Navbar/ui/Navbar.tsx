import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, logout } from 'entities/User';
import { Button, ButtonTheme } from 'shared/ui/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();

  const onClickOpenLoginModalHandler = useCallback(() => {
    setIsOpenLoginModal(true);
  }, []);

  const onClickCloseLoginModalHandler = useCallback(() => {
    setIsOpenLoginModal(false);
  }, []);

  const onClickLogoutHandler = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(styles.Navbar, {}, [className])}>
        <Button
          className={classNames(styles.links, {}, [])}
          theme={ButtonTheme.CLEAR_INVERTED}
          onClick={onClickLogoutHandler}
        >
          {t('Выйти')}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button
        className={classNames(styles.links, {}, [])}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onClickOpenLoginModalHandler}
      >
        {t('Войти')}
      </Button>

      {isOpenLoginModal && (
        <LoginModal
          isOpen={isOpenLoginModal}
          onClose={onClickCloseLoginModalHandler}
        />
      )}
    </div>
  );
});
