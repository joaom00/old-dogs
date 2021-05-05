import { Link } from 'react-router-dom';
import { ReactComponent as DogsLogoImg } from '../../assets/dogs.svg';
import { useAuth } from '../../contexts/UserContext';
import * as S from './styles';

const Header: React.FC = () => {
  const { user, userLogout } = useAuth();
  return (
    <S.Box>
      <S.Links>
        <Link to="/" aria-label="Dogs - Home">
          <DogsLogoImg />
        </Link>
        {user ? (
          <S.Link to="/conta">
            {user.nome} <S.UserImg /> <button onClick={userLogout}>Sair</button>
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
