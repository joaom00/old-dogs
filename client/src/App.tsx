import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify'

import theme from './styles/theme'

import AppProvider from './contexts'

import Routes from './routes'

import GlobalStyles from './styles/global'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false
    }
  }
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router>
          <AppProvider>
            <Routes />
            <ToastContainer />
          </AppProvider>
        </Router>
        <GlobalStyles />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
