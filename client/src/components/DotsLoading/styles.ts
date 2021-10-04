import styled, { keyframes } from 'styled-components';

const dots = keyframes`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, 30px, 0);
  }
`;

export const Wrapper = styled.div`
  text-align: center;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: #664b07;
    margin: 4px;
    animation: ${dots} 0.6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;

    &:nth-child(1) {
      animation-delay: 0.1s;
    }

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.3s;
    }

    &:nth-child(4) {
      animation-delay: 0.4s;
    }
  }
`;
