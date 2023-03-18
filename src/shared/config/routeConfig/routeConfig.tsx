import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

export enum AppRotes {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRotes, string> = {
    [AppRotes.MAIN]: '/',
    [AppRotes.ABOUT]: '/about',
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
};
