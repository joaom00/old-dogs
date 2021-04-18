import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as UserIconImg } from '../../assets/usuario.svg';

export const Box = styled.header`
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  background: white;

  width: 100%;

  position: fixed;
  top: 0;
  z-index: 100;
`;

export const Links = styled.nav`
  max-width: 50rem;
  height: 4rem;
  padding: 0 1rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(NavLink)`
  color: #333;
  display: flex;
  align-items: center;
`;

export const UserImg = styled(UserIconImg)`
  display: inline-block;
  width: 14px;
  height: 17px;
  margin-left: 0.5rem;
`;
