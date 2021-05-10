import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/dogs.svg';

import * as S from './styles';

const SignInForm: React.FC = () => {
  return (
    <S.Box>
      <img src={logoImg} alt="" />
      <p>Dogs</p>
      <S.Form>
        <fieldset>
          <S.Title>Iniciar sessão</S.Title>
          <S.Description>
            Já possui uma conta? Faça login aqui embaixo.
          </S.Description>
          <Input name="username" label="Username" />
          <Input name="password" label="Senha" type="password" />
        </fieldset>

        <Button>Entrar</Button>
      </S.Form>
    </S.Box>
  );
};

export default SignInForm;
