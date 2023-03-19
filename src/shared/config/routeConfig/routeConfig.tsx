import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRotes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRotes, string> = {
    [AppRotes.MAIN]: '/',
    [AppRotes.ABOUT]: '/about',
    [AppRotes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRotes, RouteProps> = {
    [AppRotes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRotes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRotes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
