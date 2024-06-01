import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
import { ArticleEditPage } from 'pages/ArticleEditPage';
import { ArticleCreatePage } from 'pages/ArticleCreatePage';
import { AdminPanelPage } from 'pages/AdminPanelPage';
import { UserRoles } from 'entities/User';
import { ForbiddenPage } from 'pages/ForbiddenPage';
import {
  AppRotes,
  getRouteAbout,
  getRouteAdminPanel,
  getRouteAiHelper,
  getRouteArticleCreate,
  getRouteArticleDetails,
  getRouteArticleEdit,
  getRouteArticles,
  getRouteForbidden,
  getRouteMain,
  getRouteNotFound,
  getRouteProfile,
} from 'shared/constants/router';
import { AiHelperPage } from 'pages/AiHelperPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRoles[]
}

export const routeConfig: Record<AppRotes, AppRoutesProps> = {
  [AppRotes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRotes.ABOUT]: {
    path: getRouteAbout(),
    element: <AboutPage />,
  },
  [AppRotes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRotes.ARTICLES]: {
    path: getRouteArticles(),
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRotes.ARTICLE_DETAILS]: {
    path: getRouteArticleDetails(':id'),
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRotes.ARTICLE_CREATE]: {
    path: getRouteArticleCreate(),
    element: <ArticleCreatePage />,
    authOnly: true,
  },
  [AppRotes.ARTICLE_EDIT]: {
    path: getRouteArticleEdit(':id'),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRotes.ADMIN_PANEL]: {
    path: getRouteAdminPanel(),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRoles.ADMIN, UserRoles.MANAGER],
  },
  [AppRotes.AI_HELPER]: {
    path: getRouteAiHelper(),
    element: <AiHelperPage />,
    authOnly: true,
  },
  [AppRotes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },
  [AppRotes.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: <NotFoundPage />,
  },
};
