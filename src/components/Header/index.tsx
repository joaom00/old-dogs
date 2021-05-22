import { FiHome, FiBookmark, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/dogs.svg';
// import useAuth from '../../hooks/useAuth';

import * as S from './styles';

const Header: React.FC = () => {
  // const { user } = useAuth();

  return (
    <S.Wrapper>
      <img src={logoImg} alt="" />
      <S.Search placeholder="Procurar..." />
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
