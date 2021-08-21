import { useEffect, useRef, useState } from 'react';
import { FiHome } from 'react-icons/fi';

import Logo from '../Logo';

import useAuth from '../../hooks/useAuth';

import userWithoutImage from '../../assets/user.jpg';

import * as S from './styles';

const Header = () => {
  const { user, signOut } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function handleClickOutside(event: MouseEvent) {
    if (dropdownRef.current && !dropdownRef.current?.contains(event.target as Node)) {
      setShowMenu(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Logo />
        <ul>
          <S.Home to="/">
            <FiHome size={24} />
          </S.Home>
          <S.Profile ref={dropdownRef} onClick={() => setShowMenu(!showMenu)}>
            <S.UserImage src={user?.avatarUrl ? user.avatarUrl : userWithoutImage} />
            {showMenu && (
              <S.Dropdown>
                <ul>
                  <li>
                    <S.ProfileLink to={`/${user?.username}`}>Perfil</S.ProfileLink>
                  </li>
                  <li>
                    <S.EditProfileLink to="/profile/edit">Editar perfil</S.EditProfileLink>
                  </li>
                  <li>
                    <S.LogoutButton onClick={signOut}>Sair</S.LogoutButton>
                  </li>
                </ul>
              </S.Dropdown>
            )}
          </S.Profile>
        </ul>
      </S.HeaderWrapper>
    </S.Wrapper>
  );
};

export default Header;
