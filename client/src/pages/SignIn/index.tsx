import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../../contexts/AuthContext';

import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styles';
import Logo from '../../components/Logo';

const SignInForm = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      await signIn.mutateAsync({ emailOrUsername, password });
      history.push('/');
    } catch (err) {
      // TODO: show notification error
    }
  }

  return (
    <S.Wrapper>
      <S.SignInFormWrapper>
        <Logo color="yellow" size="large">
          Dogs
        </Logo>
        <S.SignInForm onSubmit={handleSubmit}>
          <fieldset>
            <S.Title>Iniciar sessão</S.Title>
            <S.Description>
              Já possui uma conta? Faça login aqui embaixo.
            </S.Description>
            <Input
              type="text"
              name="emailOrUsername"
              label="E-mail ou Nome de usuário"
              value={emailOrUsername}
              onChange={({ target }) => setEmailOrUsername(target.value)}
            />
            <Input
              type="password"
              name="password"
              label="Senha"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </fieldset>

          <Button fullWidth type="submit">
            {signIn.isLoading ? 'Entrando...' : 'Entrar'}
          </Button>

          <S.LinksWrapper>
            <p>
              Não tem conta? <S.SignUpLink to="/signup">Crie uma</S.SignUpLink>
            </p>
            <S.ForgotPasswordLink to="/forgot-password">
              Esqueci minha senha
            </S.ForgotPasswordLink>
          </S.LinksWrapper>
        </S.SignInForm>
      </S.SignInFormWrapper>
      <S.Background />
    </S.Wrapper>
  );
};

export default SignInForm;
