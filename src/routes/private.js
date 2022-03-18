import { useContext } from 'react';
import { AuthContext } from '../context/user';
import { Navigate } from 'react-router';

export const PrivateRoute = ({ logPage, defaultPage, isPrivate }) => {
  const { auth } = useContext(AuthContext);

  if (!auth && isPrivate) {
    return <Navigate to='/' />;
  }

  return auth ? logPage : defaultPage;
};
