import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import Button from '../../components/Button';
import Input from '../../components/Input';

import * as S from './styles';

const SignUpForm = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    await api.post('users', {
      username,
      email,
      password
    });

    history.push('/signin');
  }

  return (
    <S.Wrapper>
      <S.SignUpFormWrapper>
        <S.LinkToSignInPage to="/signin">
          <FiArrowLeft /> Voltar para a página de login
        </S.LinkToSignInPage>
        <S.SignUpForm onSubmit={handleSubmit}>
          <fieldset>
            <S.Title>Cadastre-se</S.Title>
            <S.Description>Crie uma conta gratuitamente!</S.Description>
            <Input
              type="text"
              name="username"
              label="Nome de Usuário"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
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

          <Button type="submit">Criar conta</Button>
        </S.SignUpForm>
      </S.SignUpFormWrapper>
      <S.Background />
    </S.Wrapper>
  );
};

export default SignUpForm;
