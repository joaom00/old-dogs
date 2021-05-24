import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

import AppProvider from './contexts';

import Routes from './routes';

import GlobalStyles from './styles/global';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppProvider>
          <Routes />
        </AppProvider>

        <GlobalStyles />
      </Router>
    </ThemeProvider>
  );
};

export default App;
