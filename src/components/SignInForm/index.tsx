import { FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { TOKEN_POST, USER_GET } from '../../services/api';
import Button from '../Button';
import Input from '../Input';
import * as S from './styles';

const SignInForm: React.FC = () => {
  const username = useForm();
  const password = useForm();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      getUser(token);
    }
  }, []);

  const getUser = async (token: string) => {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value
      });

      const response = await fetch(url, options);
      const data = await response.json();
      window.localStorage.setItem('token', data.token);
      getUser(data.token);
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
