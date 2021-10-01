import { useAuth } from '../../contexts/AuthContext';

import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Input from '../../components/Input';

import * as S from './styles';

const EditProfile = () => {
  const { user } = useAuth();

  return (
    <S.Wrapper>
      <S.UserDataFormWrapper>
        <S.UserImageWrapper role="button">
          <img src={user.avatarUrl} />
        </S.UserImageWrapper>

        <fieldset>
          <Heading as="legend">Seus dados</Heading>
          <Input
            initialValue={user.username}
            type="text"
            name="username"
            label="Nome de usuário"
            sideBySide
          />
          <Input
            initialValue={user.email}
            type="text"
            name="email"
            label="E-mail"
            sideBySide
          />
          <Input
            initialValue={user.name}
            type="text"
            name="name"
            label="Nome"
            sideBySide
          />
        </fieldset>

        <fieldset>
          <Heading as="legend">Trocar senha</Heading>
          <Input
            type="password"
            name="oldPassword"
            label="Senha atual"
            sideBySide
          />
          <Input
            type="password"
            name="newPassword"
            label="Nova senha"
            sideBySide
          />
        </fieldset>

        <S.Button>
          <Button>Salvar</Button>
        </S.Button>
      </S.UserDataFormWrapper>
    </S.Wrapper>
  );
};

export default EditProfile;
