import { FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

const SignInForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  };

  return (
    <S.Box>
      <S.Title>Login</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />

        <button>Entrar</button>
      </S.Form>
      <Link to="/login/signup">Cadastro</Link>
    </S.Box>
  );
};

export default SignInForm;
