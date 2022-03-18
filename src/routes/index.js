import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import { PrivateRoute } from './private';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='search' element={<Search />} />
      <Route
        path='profile'
        element={
          <PrivateRoute
            logPage={<Profile />}
            defaultPage={<Home />}
            isPrivate
          />
        }
      />
    </Routes>
  );
};

export default AllRoutes;
