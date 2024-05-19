import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIsUserAdmin, getIsUserManager, getUserAuthData, logout,
} from 'entities/User';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Text, TextTheme } from 'shared/ui/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { Dropdown } from 'shared/ui/Dropdown';
import { Avatar } from 'shared/ui/Avatar';
import { getRouteAdminPanel, getRouteArticleCreate, getRouteProfile } from 'shared/constants/router';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(getIsUserAdmin);
  const isManager = useSelector(getIsUserManager);

  const onClickOpenLoginModalHandler = useCallback(() => {
    setIsOpenLoginModal(true);
  }, []);

  const onClickCloseLoginModalHandler = useCallback(() => {
    setIsOpenLoginModal(false);
  }, []);

  const onClickLogoutHandler = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (authData) {
    return (
      <header className={classNames(styles.Navbar, {}, [className])}>
        <Text
          className={styles.appName}
          title={t('Articles App')}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          className={styles.createBtn}
          to={getRouteArticleCreate()}
          theme={AppLinkTheme.PRIMARY_INVERTED}
        >
          {t('Создать статью')}
        </AppLink>

        {/* TODO добавить как то аватар */}
        <Dropdown
          className={styles.dropdown}
          items={[
            ...(isAdminPanelAvailable ? [{
              content: t('Админка'),
              href: getRouteAdminPanel(),
            }] : []),
            {
              content: t('Профиль'),
              href: getRouteProfile(String(authData.userId)),
            },
            {
              content: t('Выйти'),
              onClick: onClickLogoutHandler,
            },
          ]}
          // trigger={<Avatar size={30} src={authData.avatar}/>}
          trigger={<Avatar size={30} />}
          direction="bottom left"
        />
      </header>
    );
  }

  return (
    <header className={classNames(styles.Navbar, {}, [className])}>
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
    </header>
  );
});
