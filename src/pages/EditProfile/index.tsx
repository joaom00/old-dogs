import Button from '../../components/Button';
import Input from '../../components/Input';

import useAuth from '../../hooks/useAuth';

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
          <S.Title>Seus dados</S.Title>
          <Input initialValue={user.username} type="text" name="username" label="Nome de usuário" sideBySide />
          <Input initialValue={user.email} type="text" name="email" label="E-mail" sideBySide />
          <Input initialValue={user.name} type="text" name="name" label="Nome" sideBySide />
        </fieldset>

        <fieldset>
          <S.Title>Trocar senha</S.Title>
          <Input type="password" name="oldPassword" label="Senha atual" sideBySide passwordInput />
          <Input type="password" name="newPassword" label="Nova senha" sideBySide passwordInput />
        </fieldset>

        <S.Button>
          <Button>Salvar</Button>
        </S.Button>
      </S.UserDataFormWrapper>
    </S.Wrapper>
  );
};

export default EditProfile;
