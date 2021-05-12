import Button from '../../components/Button';
import Input from '../../components/Input';

import * as S from './styles';

const SignUpForm: React.FC = () => {
  return (
    <S.Box>
      <S.Title>Cadastre-se</S.Title>
      <S.Form>
        <Input name="email" label="E-mail" />

        <Button>Cadastrar</Button>
      </S.Form>
    </S.Box>
  );
};

export default SignUpForm;
