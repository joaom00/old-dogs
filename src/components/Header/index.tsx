import { FiHome } from 'react-icons/fi';
import { BiUserCircle } from 'react-icons/bi';

import { Link } from 'react-router-dom';
import Logo from '../Logo';

import * as S from './styles';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { user } = useAuth();

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Logo /> {user.username}
        <div>
          <S.Icons>
            <Link to="/">
              <FiHome size={24} color="#14142B" />
            </Link>
          </S.Icons>
          <S.UserImage to="/profile">
            <BiUserCircle size={24} color="#14142B" />
          </S.UserImage>
        </div>
      </S.HeaderWrapper>
    </S.Wrapper>
  );
};

export default Header;
