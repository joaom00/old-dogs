import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray.line};
  `}
`;

export const HeaderWrapper = styled.nav`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: ${theme.spacings.small} ${theme.spacings.xxsmall};
  `}
`;

export const Home = styled(Link)`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.small};

    a + a {
      margin-left: ${theme.spacings.xsmall};
    }

    svg {
      color: ${theme.colors.gray.body};
    }
  `}
`;

export const Profile = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.gray.titleActive};
  `}
`;
