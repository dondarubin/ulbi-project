import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { MainIconDesktop } from 'shared/assets/icons/MainIcon/MainIconDesktop';
import { AboutIcon } from 'shared/assets/icons/AboutIcon/AboutIcon';
import { UserProfileIcon } from 'shared/assets/icons/UserProfile/UserProfileIcon';
import { ArticlesIcon } from 'shared/assets/icons/ArticlesIcon/ArticlesIcon';
import { SidebarItemType } from '../types/Sidebar.types';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
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
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.userId,
          text: 'Профиль',
          Icon: UserProfileIcon,
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          text: 'Статьи',
          Icon: ArticlesIcon,
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
