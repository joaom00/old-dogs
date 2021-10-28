import styled, { css, DefaultTheme } from 'styled-components'

import { SignInFormWrapper } from '../../pages/SignIn/styles'

import { LogoProps } from '.'
import { Link } from 'react-router-dom'

const modifiers = {
  black: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray.titleActive};
  `,

  yellow: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary[500]};
  `,

  normal: () => css`
    height: 2.5rem;
  `,

  large: () => css`
    height: 3.4rem;
  `
}

export const Wrapper = styled(Link)<LogoProps>`
  ${({ theme, color, size }) => css`
    display: flex;
    align-items: center;

    svg {
      height: 100%;
    }

    p {
      font-family: ${theme.font.heading};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.gray.titleActive};
      font-size: ${theme.font.sizes.xlarge};
      margin-left: ${theme.spacings.xsmall};
    }

    ${!!color && modifiers[color](theme)}
    ${!!size && modifiers[size]}

    ${SignInFormWrapper} & {
      @media ${theme.media.between('medium', 'large')} {
        align-self: flex-start;
        padding-left: 16.5rem;
      }

      @media ${theme.media.greaterThan('large')} {
        margin-left: 8rem;
      }
    }
  `}
`
