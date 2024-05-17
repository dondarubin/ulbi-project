import {
  memo, Suspense, useCallback, useMemo,
} from 'react';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { RequireAuth } from './RequireAuth';

const AppRouter = memo(() => {
  // const isAuth = useSelector(getUserAuthData);
  //
  // const routes = useMemo(() => Object.values(routeConfig).filter((route) => !(route.authOnly && !isAuth)), [isAuth]);

  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
      {/* {routes.map(({ element, path }) => ( */}
      {/*  <Route */}
      {/*    key={path} */}
      {/*    path={path} */}
      {/*    element={( */}
      {/*      <Suspense fallback={<PageLoader />}> */}
      {/*        {element} */}
      {/*      </Suspense> */}
      {/*    )} */}
      {/*  /> */}
      {/* ))} */}
    </Routes>
  );
});

export default AppRouter;
