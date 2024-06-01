import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { MainIconDesktop } from 'shared/assets/icons/MainIcon/MainIconDesktop';
import { AboutIcon } from 'shared/assets/icons/AboutIcon/AboutIcon';
import { UserProfileIcon } from 'shared/assets/icons/UserProfile/UserProfileIcon';
import { ArticlesIcon } from 'shared/assets/icons/ArticlesIcon/ArticlesIcon';
import {
  getRouteAbout, getRouteAiHelper, getRouteArticles, getRouteMain, getRouteProfile,
} from 'shared/constants/router';
import { RobotIcon } from 'shared/assets/icons/RobotIcon/RobotIcon';
import { SidebarItemType } from '../types/Sidebar.types';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: getRouteMain(),
        text: 'Главная',
        Icon: MainIconDesktop,
      },
      {
        path: getRouteAbout(),
        text: 'О сайте',
        Icon: AboutIcon,
      },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: getRouteProfile(String(userData.userId)),
          text: 'Профиль',
          Icon: UserProfileIcon,
          authOnly: true,
        },
        {
          path: getRouteArticles(),
          text: 'Статьи',
          Icon: ArticlesIcon,
          authOnly: true,
        },
        {
          path: getRouteAiHelper(),
          text: 'Помощник',
          Icon: RobotIcon,
          authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
