import styled, { css } from 'styled-components'

import { Wrapper as HomeWrapper } from '../../pages/Home/styles'
import { Wrapper as ProfileWrapper } from '../../pages/Profile/styles'
import { CommentsWrapper as ModalCommentsWrapper } from '../Modal/styles'

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

    ${HomeWrapper} & {
      margin-top: ${theme.spacings.medium};

      svg {
        display: block;
        margin: 0 auto;
      }
    }

    ${ProfileWrapper} & {
      svg {
        display: block;
        margin: 0 auto;
        margin-top: 12rem;
      }
    }

    ${ModalCommentsWrapper} & {
      svg {
        display: block;
        margin: 0 auto;
      }
    }
  `}
`
