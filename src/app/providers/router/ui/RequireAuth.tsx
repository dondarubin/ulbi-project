import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { getUserAuthData, getUserRoles, UserRoles } from '@/entities/User';
import { getRouteForbidden, getRouteMain } from '@/shared/constants/router';

interface RequireAuthProps {
  children: JSX.Element,
  roles?: UserRoles[]
}

export function RequireAuth({ children, roles }: RequireAuthProps) {
  const isAuth = useSelector(getUserAuthData);
  const userRoles = useSelector(getUserRoles);
  const location = useLocation();

  const hasRequiredRoles = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles.some((requiredRole) => {
      const hasRole = userRoles?.includes(requiredRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  console.log(!isAuth);
  console.log(!hasRequiredRoles);

  if (!isAuth) {
    return <Navigate to={getRouteMain()} state={{ from: location }} replace />;
  }

  if (!hasRequiredRoles) {
    return <Navigate to={getRouteForbidden()} state={{ from: location }} replace />;
  }

  return children;
}
