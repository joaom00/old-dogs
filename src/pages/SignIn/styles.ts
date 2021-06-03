import styled, { css, keyframes } from 'styled-components';

import { Link } from 'react-router-dom';

import backgroundImg from '../../assets/login.jpg';

const animeLeft = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const Wrapper = styled.section`
  height: 100vh;
  display: flex;
`;

export const SignInFormWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxxlarge} ${theme.spacings.medium} 0 ${theme.spacings.medium};

    width: 100%;
    max-width: 600px;

    display: flex;
    flex-direction: column;

    opacity: 0;
    transform: translateX(-20px);
    animation: ${animeLeft} 0.4s forwards;

    @media ${theme.media.between('medium', 'large')} {
      padding-left: 0;
      max-width: 100vw;
      align-items: center;
    }

    @media ${theme.media.greaterThan('large')} {
      padding-left: 0;
    }
  `}
`;

export const SignInForm = styled.form`
  ${({ theme }) => css`
    margin-top: 8rem;

    width: 100%;
    max-width: 40rem;

    @media ${theme.media.greaterThan('medium')} {
      margin-left: 8rem;
    }
  `}
`;

export const Title = styled.legend`
  ${({ theme }) => css`
    font-family: ${theme.font.heading};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray.titleActive};
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: ${theme.spacings.xxsmall};
    line-height: ${theme.spacings.xlarge};
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 1.2rem;
      height: 1.2rem;
      background: ${theme.colors.primary[500]};
      bottom: 0.8rem;
      left: -0.5rem;
      border-radius: 0.2rem;
      z-index: -1;
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray.placeholder};
    font-style: normal;
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.medium};
    line-height: 2.6rem;
    margin-bottom: ${theme.spacings.xlarge};
  `}
`;

export const LinksWrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    margin-top: ${theme.spacings.medium};

    p {
      color: ${theme.colors.gray.titleActive};
      font-size: ${theme.font.sizes.medium};
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`;

export const SignUpLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.primary[500]};
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const ForgotPasswordLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.primary[500]};
    font-weight: ${theme.font.medium};
    font-size: ${theme.font.sizes.medium};
  `}
`;

export const Background = styled.div`
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  flex: 1;
`;
