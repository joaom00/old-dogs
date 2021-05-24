import { FiHome, FiBookmark, FiUser } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import Logo from '../Logo';

import * as S from './styles';

const Header = () => {
  return (
    <S.Wrapper>
      <Logo />
      <div>
        <S.Icons>
          <Link to="/">
            <FiHome size={24} color="#14142B" />
          </Link>
          <Link to="/saves">
            <FiBookmark size={24} color="#14142B" />
          </Link>
        </S.Icons>
        <S.UserImage to="/profile">
          <FiUser size={24} />
        </S.UserImage>
      </div>
    </S.Wrapper>
  );
};

export default Header;
