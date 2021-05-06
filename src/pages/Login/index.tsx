import { Navigate, Route, Routes } from 'react-router';

import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';
import ForgotPasswordForm from '../../components/ForgotPasswordForm';
import ResetPasswordForm from '../../components/ResetPasswordForm';
import { useAuth } from '../../contexts/UserContext';

import * as S from './styles';

const Login: React.FC = () => {
  const { isLogged } = useAuth();

  if (isLogged) return <Navigate to="/conta" />;
  return (
    <S.LoginSection>
      <S.Forms>
        <Routes>
          <Route path="/" element={<SignInForm />} />
          <Route path="signup" element={<SignUpForm />} />
          <Route path="forgot-password" element={<ForgotPasswordForm />} />
          <Route path="reset-password" element={<ResetPasswordForm />} />
        </Routes>
      </S.Forms>
    </S.LoginSection>
  );
};

export default Login;
