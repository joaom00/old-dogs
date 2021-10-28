import styled, { css } from 'styled-components'

export const UserWrapper = styled.li`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    & + & {
      margin-top: ${theme.spacings.medium};
    }

    img {
      width: ${theme.spacings.xxxlarge};
    }

    p {
      margin-left: ${theme.spacings.medium};
      color: ${theme.colors.gray.titleActive};
    }

    button {
      margin-left: auto;
    }
  `}
`
