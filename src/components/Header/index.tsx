import { FiHome } from 'react-icons/fi';

import Logo from '../Logo';

import useAuth from '../../hooks/useAuth';

import userWithoutImage from '../../assets/user.jpg';

import * as S from './styles';

const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Logo /> {user?.username}
        <button onClick={signOut}>sair</button>
        <ul>
          <S.Home to="/">
            <FiHome size={24} />
          </S.Home>
          <S.Profile to={`/${user?.username}`}>
            <S.UserImage
              src={user?.avatarUrl ? user.avatarUrl : userWithoutImage}
            />
          </S.Profile>
        </ul>
      </S.HeaderWrapper>
    </S.Wrapper>
  );
};

export default Header;
