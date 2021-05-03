import { Link } from 'react-router-dom';
import * as S from './styles';

import { ReactComponent as DogsLogoImg } from '../../assets/dogs.svg';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

const Header: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <S.Box>
      <S.Links>
        <Link to="/" aria-label="Dogs - Home">
          <DogsLogoImg />
        </Link>
        {user ? (
          <S.Link to="/conta">
            {user.nome} <S.UserImg />{' '}
          </S.Link>
        ) : (
          <S.Link to="/login">
            Login / Criar <S.UserImg />{' '}
          </S.Link>
        )}
      </S.Links>
    </S.Box>
  );
};

export default Header;
