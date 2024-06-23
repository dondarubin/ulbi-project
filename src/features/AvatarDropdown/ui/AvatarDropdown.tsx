import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Dropdown } from '@/shared/ui/Popups';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/constants/router';
import {
  getIsUserAdmin, getIsUserManager, getUserAuthData, logout,
} from '@/entities/User';
import { DefaultUserIcon } from '@/shared/assets/icons/DefaultUserIcon/DefaultUserIcon';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('main');
  const dispatch = useDispatch();
  const authData = useSelector(getUserAuthData);
  const isAdmin = useSelector(getIsUserAdmin);
  const isManager = useSelector(getIsUserManager);

  const onClickLogoutHandler = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;

  if (!authData) {
    return null;
  }

  return (
    // TODO добавить как то аватар
    <Dropdown
      className={classNames('', {}, [className])}
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
      trigger={<DefaultUserIcon />}
      direction="bottom left"
    />
  );
});
