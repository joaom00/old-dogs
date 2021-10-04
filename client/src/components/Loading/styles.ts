import styled, { css } from 'styled-components';

import { Wrapper as HomeWrapper } from '../../pages/Home/styles';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.alwaysOnTop};

    ${HomeWrapper} & {
      position: fixed;
      top: 0;
      left: 0;
    }
  `}
`;
