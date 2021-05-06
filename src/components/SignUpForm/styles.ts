import { NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const animeLeft = keyframes`
  to {
    opacity: 1;
    transform: initial;
  }
`;

export const Box = styled.section`
  opacity: 0;
  transform: translateX(-20px);
  animation: ${animeLeft} 0.3s forwards;
`;

export const Title = styled.h1`
  font-family: var(--type-second);
  line-height: 1;
  font-size: 3rem;
  margin: 1rem 0;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background: #fb1;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

export const Form = styled.form`
  margin-bottom: 2rem;
`;

export const ForgotPasswordLink = styled(NavLink)`
  display: inline-block;
  color: #666;
  padding: 0.5rem 0;
  line-height: 1;

  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    background: currentColor;
  }
`;

export const SignUpContainer = styled.div`
  margin-top: 4rem;

  h2 {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;

    &::after {
      content: '';
      display: block;
      background: #ddd;
      width: 3rem;
      height: 0.5rem;
      border-radius: 0.2rem;
    }
  }

  p {
    margin: 2rem 0;
  }
`;

export const SignUpLink = styled(NavLink)`
  font-size: 1rem;
  font-family: var(--type-first);
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #fb1;
  color: #764701;
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
