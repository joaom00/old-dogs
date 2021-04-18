import { Route, Routes } from 'react-router';

import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';
import ForgotPasswordForm from '../../components/ForgotPasswordForm';
import ResetPasswordForm from '../../components/ResetPasswordForm';

const Login: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInForm />} />
      <Route path="signup" element={<SignUpForm />} />
      <Route path="forgot-password" element={<ForgotPasswordForm />} />
      <Route path="reset-password" element={<ResetPasswordForm />} />
    </Routes>
  );
};

export default Login;
