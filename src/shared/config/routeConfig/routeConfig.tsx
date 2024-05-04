import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRotes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRotes, string> = {
  [AppRotes.MAIN]: '/',
  [AppRotes.ABOUT]: '/about',
  [AppRotes.PROFILE]: '/profile/', // + :id
  [AppRotes.ARTICLES]: '/articles',
  [AppRotes.ARTICLE_DETAILS]: '/articles/', // + :id
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
  [AppRotes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
