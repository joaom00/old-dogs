import { AuthProvider } from './AuthContext';
import { ModalProvider } from './ModalContext';

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
    <ModalProvider>{children}</ModalProvider>
  </AuthProvider>
);

export default AppProvider;
