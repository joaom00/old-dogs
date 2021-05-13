import { FormEvent, useState } from 'react';

import logoImg from '../../assets/dogs.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import useAuth from '../../hooks/useAuth';

import * as S from './styles';
import { useHistory } from 'react-router';

const SignInForm: React.FC = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await signIn({ email, password });

    history.push('/');
  }

  return (
    <S.Wrapper>
      <S.SignInFormWrapper>
        <S.Logo>
          <img src={logoImg} alt="" />
          <p>Dogs</p>
        </S.Logo>
        <S.SignInForm onSubmit={handleSubmit}>
          <fieldset>
            <S.Title>Iniciar sessão</S.Title>
            <S.Description>
              Já possui uma conta? Faça login aqui embaixo.
            </S.Description>
            <Input
              type="email"
              name="email"
              label="E-mail"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Input
              type="password"
              name="password"
              label="Senha"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </fieldset>

          <Button type="submit" mt={48}>
            Entrar
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
