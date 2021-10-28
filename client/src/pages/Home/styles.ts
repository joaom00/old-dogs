import styled, { css } from 'styled-components'

import { Wrapper as PostWrappper } from '../../components/Post/styles'

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    max-width: 61.6rem;
    margin: ${theme.spacings.medium} auto 0 auto;

    ${PostWrappper} + ${PostWrappper} {
      margin-top: ${theme.spacings.medium};
    }
  `}
`

export const NoHasNextPage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray.placeholder};
    text-align: center;
    margin-top: ${theme.spacings.medium};
    margin-bottom: ${theme.spacings.medium};
  `}
`
