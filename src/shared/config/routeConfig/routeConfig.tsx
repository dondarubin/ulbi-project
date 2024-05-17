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

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRoles[]
}

export enum AppRotes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN_PANEL = 'admin_panel',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRotes, string> = {
  [AppRotes.MAIN]: '/',
  [AppRotes.ABOUT]: '/about',
  [AppRotes.PROFILE]: '/profile/', // + :id
  [AppRotes.ARTICLES]: '/articles',
  [AppRotes.ARTICLE_DETAILS]: '/articles/', // + :id
  [AppRotes.ARTICLE_CREATE]: '/articles/new',
  [AppRotes.ARTICLE_EDIT]: '/articles/edit/',
  [AppRotes.ADMIN_PANEL]: '/admin',
  [AppRotes.FORBIDDEN]: '/forbidden',
  [AppRotes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRotes, AppRoutesProps> = {
  [AppRotes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRotes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRotes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRotes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRotes.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRotes.ARTICLE_CREATE]: {
    path: `${RoutePath.article_create}`,
    element: <ArticleCreatePage />,
    authOnly: true,
  },
  [AppRotes.ARTICLE_EDIT]: {
    path: `${RoutePath.article_edit}:id`,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRotes.ADMIN_PANEL]: {
    path: `${RoutePath.admin_panel}`,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRoles.ADMIN, UserRoles.MANAGER],
  },
  [AppRotes.FORBIDDEN]: {
    path: `${RoutePath.forbidden}`,
    element: <ForbiddenPage />,
  },
  [AppRotes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
