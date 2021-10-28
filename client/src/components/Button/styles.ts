import styled, { css, DefaultTheme } from 'styled-components'

import { ForgotPasswordForm } from '../../pages/ForgotPassword/styles'
import { SignInForm } from '../../pages/SignIn/styles'
import { SignUpForm } from '../../pages/SignUp/styles'
import { Username } from '../../pages/Profile/styles'
import { UserDataForm } from '../../pages/EditProfile/styles'
import { Wrapper as NewPhotoWrapper } from '../../pages/NewPhoto/styles'

type WrapperProps = {
  fullWidth: boolean
  variant: 'primary' | 'secondary'
  size: 'xsmall' | 'small' | 'medium' | 'large'
}

const modifiers = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary[500]};
  `,

  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary[200]};
  `,

  xsmall: (theme: DefaultTheme) => css`
    padding-left: ${theme.spacings.xsmall};
    padding-right: ${theme.spacings.xsmall};
    height: 3.6rem;
    border-radius: ${theme.border.radius.xsmall};
    font-size: ${theme.font.sizes.small};
  `,

  small: (theme: DefaultTheme) => css`
    padding-left: 3.6rem;
    padding-right: 3.6rem;
    height: 4rem;
    border-radius: ${theme.border.radius.xsmall};
    font-size: ${theme.font.sizes.small};
  `,

  medium: (theme: DefaultTheme) => css`
    width: 20.1rem;
    height: ${theme.spacings.xxlarge};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.border.radius.xsmall};
    font-size: ${theme.font.sizes.medium};
  `,

  large: (theme: DefaultTheme) => css`
    width: 26.6rem;
    height: ${theme.spacings.xxlarge};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${theme.border.radius.xsmall};
    font-size: ${theme.font.sizes.medium};
  `,

  fullWidth: () => css`
    width: 100%;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, variant, size, fullWidth }) => css`
    color: ${theme.colors.primary[700]};
    font-weight: ${theme.font.bold};
    outline: none;
    border: none;
    transition: all 0.1s;
    letter-spacing: 0.08em;

    ${!!variant && modifiers[variant](theme)};
    ${!!size && modifiers[size](theme)};
    ${fullWidth && modifiers.fullWidth};

    &:hover {
      filter: brightness(0.95);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${theme.colors.primary[200]}, 0 0 0 4px ${theme.colors.primary[500]};
    }

    ${Username} & {
      margin-left: ${theme.spacings.xsmall};
    }

    ${SignInForm} &, ${SignUpForm} &, ${ForgotPasswordForm} & {
      text-transform: uppercase;
      margin-top: ${theme.spacings.xlarge};
    }

    ${UserDataForm} &, ${NewPhotoWrapper} form & {
      text-transform: uppercase;
      margin-top: 8rem;
      align-self: flex-end;
    }
  `}
`
