import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text, TextTheme } from 'shared/ui/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { getRouteArticleCreate } from 'shared/constants/router';
import { RegisterModal } from 'features/RegisterByUsername';
import { HStack } from 'shared/ui/Stack';
import { NotificationButton } from 'features/NotificationButton';
import { AvatarDropdown } from 'features/AvatarDropdown';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation('main');
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onClickOpenLoginModalHandler = useCallback(() => {
    setIsOpenLoginModal(true);
  }, []);

  const onClickOpenRegisterModalHandler = useCallback(() => {
    setIsOpenRegisterModal(true);
  }, []);

  const onClickCloseLoginModalHandler = useCallback(() => {
    setIsOpenLoginModal(false);
  }, []);

  const onClickCloseRegisterModalHandler = useCallback(() => {
    setIsOpenRegisterModal(false);
  }, []);

  if (authData) {
    return (
      <header className={classNames(styles.Navbar, {}, [className])}>
        <Text
          className={styles.appName}
          title={t('Tech Pulse')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          className={styles.createBtn}
          to={getRouteArticleCreate()}
          theme={AppLinkTheme.PRIMARY_INVERTED}
        >
          {t('Создать статью')}
        </AppLink>

        <HStack gap="16" align="center" className={styles.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    );
  }

  return (
    <header className={classNames(styles.Navbar, {}, [className])}>
      <Button
        className={classNames(styles.links, {}, [])}
        theme={ButtonTheme.CLEAR_INVERTED}
        onClick={onClickOpenRegisterModalHandler}
      >
        {t('Зарегистрироваться')}
      </Button>

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

      {isOpenRegisterModal && (
        <RegisterModal
          isOpen={isOpenRegisterModal}
          onClose={onClickCloseRegisterModalHandler}
        />
      )}
    </header>
  );
});
