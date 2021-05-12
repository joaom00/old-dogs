import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import convertPixelToRem from '../../utils/convertPixelToRem';

import backgroundImg from '../../assets/login.jpg';

const animeLeft = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const Wrapper = styled.section`
  height: 100vh;

  opacity: 0;
  transform: translateX(-20px);
  animation: ${animeLeft} 0.3s forwards;

  display: flex;
`;

export const SignInFormWrapper = styled.div`
  padding: ${convertPixelToRem(64)} ${convertPixelToRem(32)}
    ${convertPixelToRem(0)} ${convertPixelToRem(32)};

  width: 100%;
  max-width: ${convertPixelToRem(600)};

  display: flex;
  flex-direction: column;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding-left: ${convertPixelToRem(0)};
    max-width: 100vw;
    align-items: center;
  }

  @media (min-width: 1024px) {
    padding-left: ${convertPixelToRem(0)};
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    align-self: flex-start;
    padding-left: ${convertPixelToRem(165)};
  }

  @media (min-width: 1024px) {
    margin-left: ${convertPixelToRem(80)};
  }

  p {
    font-family: Spectral;
    color: #14142b;
    font-size: ${convertPixelToRem(36)};
    margin-left: ${convertPixelToRem(16)};
  }
`;

export const SignInForm = styled.form`
  margin-top: ${convertPixelToRem(80)};

  @media (min-width: 1024px) {
    margin-left: ${convertPixelToRem(80)};
  }

  width: 100%;
  max-width: ${convertPixelToRem(400)};
`;

export const Title = styled.legend`
  font-family: Spectral;
  color: #14142b;
  font-size: ${convertPixelToRem(36)};
  margin-bottom: ${convertPixelToRem(8)};
  line-height: 46px;

  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    background: #fb1;
    bottom: 8px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

export const Description = styled.p`
  color: #a0a3bd;
  font-style: normal;
  font-weight: 500;
  font-size: ${convertPixelToRem(16)};
  line-height: 26px;
  margin-bottom: ${convertPixelToRem(48)};
`;

export const LinksWrapper = styled.div`
  text-align: center;
  margin-top: ${convertPixelToRem(32)};

  p {
    color: #14142b;
    font-size: ${convertPixelToRem(16)};
    margin-bottom: ${convertPixelToRem(16)};
  }
`;

export const SignUpLink = styled(Link)`
  color: #ffbb12;
  font-weight: 500;
  font-size: ${convertPixelToRem(16)};
`;

export const ForgotPasswordLink = styled(Link)`
  color: #ffbb12;
  font-weight: 500;
  font-size: ${convertPixelToRem(16)};
`;

export const Background = styled.div`
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  flex: 1;
`;
