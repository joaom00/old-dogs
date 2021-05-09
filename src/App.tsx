import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

import { UserContextProvider } from './contexts/UserContext';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <Router>
      <UserContextProvider>
        <Routes />
      </UserContextProvider>

      <GlobalStyle />
    </Router>
  );
};

export default App;
