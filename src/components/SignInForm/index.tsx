import { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Button from '../Button';
import Input from '../Input';

import * as S from './styles';

const SignInForm: React.FC = () => {
  const username = useForm();
  const password = useForm();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          console.log(json);
        });
    }
  };

  return (
    <S.Box>
      <S.Title>Login</S.Title>
      <S.Form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />

        <Button>Entrar</Button>
      </S.Form>
      <Link to="/login/signup">Cadastro</Link>
    </S.Box>
  );
};

export default SignInForm;
