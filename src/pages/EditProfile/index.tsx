import photo from '../../assets/photo.png';
import Button from '../../components/Button';
import Input from '../../components/Input';

import * as S from './styles';

const EditProfile = () => {
  return (
    <S.Wrapper>
      <S.UserDataFormWrapper>
        <S.UserImageWrapper role="button">
          <img src={photo} />
        </S.UserImageWrapper>

        <fieldset>
          <S.Title>Seus dados</S.Title>
          <Input type="text" name="username" label="Nome de usuário" sideBySide />
          <Input type="text" name="email" label="E-mail" sideBySide />
          <Input type="text" name="name" label="Nome" sideBySide />
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
