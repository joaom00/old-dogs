import { FiHome } from 'react-icons/fi';
import { BiUserCircle } from 'react-icons/bi';

import Logo from '../Logo';

import useAuth from '../../hooks/useAuth';

import * as S from './styles';

const Header = () => {
  const { user } = useAuth();

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Logo /> {user.username}
        <ul>
          <S.Home to="/">
            <FiHome size={24} />
          </S.Home>
          <S.Profile to="/profile">
            <BiUserCircle size={24} />
          </S.Profile>
        </ul>
      </S.HeaderWrapper>
    </S.Wrapper>
  );
};

export default Header;
