import { FormEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import useForm from '../../hooks/useForm';
import Button from '../Button';
import Input from '../Input';
import * as S from './styles';

const SignInForm: React.FC = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin } = useContext(UserContext);

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

        <Button>Entrar</Button>
      </S.Form>
      <Link to="/login/signup">Cadastro</Link>
    </S.Box>
  );
};

export default SignInForm;
