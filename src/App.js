import { Route, Routes } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Search from './pages/Search';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='search' element={<Search />} />
        <Route path='profile' element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
