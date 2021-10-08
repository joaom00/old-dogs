import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ fullScreen: boolean }>`
  ${({ theme, fullScreen }) => css`
    ${fullScreen &&
    css`
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      z-index: ${theme.layers.alwaysOnTop};
    `}
  `}
`;
