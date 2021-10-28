import styled, { css } from 'styled-components'

import Container from '../../components/Container'

export const Wrapper = styled(Container)``

export const UserDataForm = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 0 ${theme.spacings.xxsmall} ${theme.spacings.small} ${theme.spacings.xxsmall};

    fieldset {
      margin-top: ${theme.spacings.xxlarge};

      @media ${theme.media.greaterThan('medium')} {
        margin-top: ${theme.spacings.xxlarge};
      }
    }
  `}
`

export const UserImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 18.4rem;
    height: 18.4rem;
    margin: ${theme.spacings.xxlarge} auto 0 auto;

    > input {
      display: none;
    }

    img {
      width: 18.4rem;
      height: 18.4rem;
      object-fit: cover;
      border-radius: 50%;
      border: 1px solid ${theme.colors.gray.line};
      cursor: pointer;
    }
  `}
`
