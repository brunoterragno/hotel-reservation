import Footer from './components/Footer';
import Header from './components/Header';
import AllRoutes from './routes';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
