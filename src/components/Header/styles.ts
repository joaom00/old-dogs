import { Link } from 'react-router-dom';
import styled from 'styled-components';
import convertPixelToRem from '../../utils/convertPixelToRem';

export const Wrapper = styled.header`
  width: 100%;
  max-width: ${convertPixelToRem(975)};
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: ${convertPixelToRem(24)} ${convertPixelToRem(32)};
`;

export const Search = styled.input`
  border: 1px solid #d9dbe9;
  border-radius: 4px;

  padding: ${convertPixelToRem(8)} ${convertPixelToRem(16)};
  width: ${convertPixelToRem(194)};

  &:focus {
    outline: none;
  }
`;

export const Icons = styled.span`
  margin-right: ${convertPixelToRem(24)};

  a + a {
    margin-left: ${convertPixelToRem(16)};
  }
`;

export const UserImage = styled(Link)`
  color: #14142b;
`;
