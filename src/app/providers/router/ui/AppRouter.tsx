import { memo, Suspense, useMemo } from 'react';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import {
  Navigate, Route, Routes, useLocation,
} from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData, getUserRoles } from 'entities/User';
import { getRouteForbidden } from 'shared/constants/router';

const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData);
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
    const routeIsAccessibleByAuth = !(route.authOnly && !isAuth);
    const routeIsAccessibleByRole = !route.roles || route.roles.some((role) => userRoles?.includes(role));
    return routeIsAccessibleByAuth && routeIsAccessibleByRole;
  }), [isAuth, userRoles]);

  // consts renderWithWrapper = useCallback((route: AppRoutesProps) => {
  //   consts element = (
  //     <Suspense fallback={<PageLoader />}>
  //       {route.element}
  //     </Suspense>
  //   );
  //
  //   return (
  //     <Route
  //       key={route.path}
  //       path={route.path}
  //       element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
  //     />
  //   );
  // }, []);

  return (
    <Routes>
      {/* {Object.values(routeConfig).map(renderWithWrapper)} */}
      {routes.map(({ element, path, roles }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              {(roles && !roles.some((role) => userRoles?.includes(role))) ? <Navigate to={getRouteForbidden()} state={{ from: location }} replace /> : element}
            </Suspense>
          )}
        />
      ))}
    </Routes>
  );
});

export default AppRouter;
