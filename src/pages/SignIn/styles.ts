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

export const Form = styled.form`
  margin-bottom: 2rem;
`;

export const Title = styled.legend`
  font-family: Spectral;
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

export const Description = styled.p``;
