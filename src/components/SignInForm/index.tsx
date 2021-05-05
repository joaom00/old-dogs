import { FormEvent } from 'react';
import { useAuth } from '../../contexts/UserContext';
import useForm from '../../hooks/useForm';
import Button from '../Button';
import Error from '../Error';
import Input from '../Input';
import * as S from './styles';

const SignInForm: React.FC = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, isError, isLoading } = useAuth();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <S.Box>
      <S.Title>Login</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        {isLoading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        <Error error={isError} />
      </S.Form>
      <S.ForgotPasswordLink to="/login/forgot-password">
        Perdeu a Senha?
      </S.ForgotPasswordLink>

      <S.SignUpContainer>
        <h2>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <S.SignUpLink to="/login/signup">Cadastro</S.SignUpLink>
      </S.SignUpContainer>
    </S.Box>
  );
};

export default SignInForm;
