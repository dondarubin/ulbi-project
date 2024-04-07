import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { MainIconDesktop } from 'shared/assets/icons/MainIcon/MainIconDesktop';
import { UserProfileIcon } from 'shared/assets/icons/UserProfile/UserProfileIcon';
import { AboutIcon } from 'shared/assets/icons/AboutIcon/AboutIcon';
import { FC } from 'react';

export type SidebarItemType = {
  path: string
  text: string
  Icon: FC<{ color: string }>;
  authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
    Icon: MainIconDesktop,
  },
  {
    path: RoutePath.about,
    text: 'О сайте',
    Icon: AboutIcon,
  },
  {
    path: RoutePath.profile,
    text: 'Профиль',
    Icon: UserProfileIcon,
    authOnly: true,
  },
];
