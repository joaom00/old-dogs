import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Footer from './components/Footer';
import Header from './components/Header';

import Home from './pages/Home';
import Login from './pages/Login';
import { UserContextProvider } from './contexts/UserContext';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login/*" element={<Login />} />
          <ProtectedRoute path="conta/*" element={<Profile />} />
        </Routes>
        <Footer />

        <GlobalStyle />
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
