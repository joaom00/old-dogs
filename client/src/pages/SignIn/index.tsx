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

  const [values, setValues] = useState({ emailOrUsername: '', password: '' });

  function handleInput(field: string, value: string) {
    setValues((oldValue) => ({ ...oldValue, [field]: value }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    try {
      await signIn.mutateAsync(values);
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
              onInputChange={(value) => handleInput('emailOrUsername', value)}
            />
            <Input
              type="password"
              name="password"
              label="Senha"
              onInputChange={(value) => handleInput('password', value)}
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
