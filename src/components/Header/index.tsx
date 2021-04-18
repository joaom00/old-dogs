import { Link } from 'react-router-dom';
import * as S from './styles';

import { ReactComponent as DogsLogoImg } from '../../assets/dogs.svg';

const Header: React.FC = () => {
  return (
    <S.Box>
      <S.Links>
        <Link to="/" aria-label="Dogs - Home">
          <DogsLogoImg />
        </Link>
        <S.Link to="/login">
          Login / Criar <S.UserImg />{' '}
        </S.Link>
      </S.Links>
    </S.Box>
  );
};

export default Header;
