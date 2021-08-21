import styled, { css, keyframes } from 'styled-components';

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

export const Profile = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray.titleActive};
    position: relative;
    display: inline-block;
    cursor: pointer;
  `}
`;

export const UserImage = styled.img`
  ${({ theme }) => css`
    width: ${theme.spacings.small};
    height: ${theme.spacings.small};
    border-radius: 50%;
    border: 1px solid ${theme.colors.gray.line};
  `}
`;

const slideDown = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: initial;
    opacity: 1;
  }
`;

export const Dropdown = styled.div`
  ${({ theme }) => css`
    position: absolute;
    background: ${theme.colors.gray.offWhite};
    width: 17.6rem;
    border-radius: 0.4rem;
    top: ${theme.spacings.medium};
    right: -${theme.spacings.xsmall};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
    font-size: ${theme.font.sizes.small};
    z-index: ${theme.layers.menu};
    animation: ${slideDown} 0.4s forwards;

    @media ${theme.media.lessThan('medium')} {
      right: 0;
    }
  `}
`;

export const ProfileLink = styled(Link)`
  ${({ theme }) => css`
    display: block;
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.gray.label};
  `}
`;

export const EditProfileLink = styled(Link)`
  ${({ theme }) => css`
    display: block;
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.gray.label};
  `}
`;

export const LogoutButton = styled.span`
  ${({ theme }) => css`
    display: block;
    border-top: 1px solid ${theme.colors.gray.line};
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.gray.label};
    cursor: pointer;
  `}
`;
