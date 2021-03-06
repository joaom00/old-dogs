import styled, { css, DefaultTheme } from 'styled-components'

type WrapperProps = {
  sideBySide: boolean
}

const modifiers = {
  sideBySide: (theme: DefaultTheme) => css`
    @media ${theme.media.greaterThan('medium')} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, sideBySide }) => css`
    display: flex;
    flex-direction: column;

    & + & {
      margin-top: ${theme.spacings.small};
    }

    ${sideBySide && modifiers.sideBySide(theme)};
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray.label};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.error};
    margin-left: ${theme.spacings.xxsmall};
  `}
`

export const InputWrapper = styled.div`
  position: relative;
`

export const ShowHidePasswordButton = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    right: ${theme.spacings.xsmall};
    transform: translateY(-50%);
    text-transform: uppercase;
    color: ${theme.colors.gray.placeholder};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    letter-spacing: 0.08em;
    cursor: pointer;
  `}
`

type InputStyleProps = {
  error?: boolean
}

const inputModifiers = {
  error: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.error};
  `
}

export const Input = styled.input<InputStyleProps>`
  ${({ theme, error }) => css`
    border: 1px solid ${theme.colors.gray.line};
    background: none;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    border-radius: ${theme.spacings.xxsmall};
    font-family: inherit;
    color: ${theme.colors.gray.titleActive};
    font-size: ${theme.font.sizes.medium};
    width: 100%;

    &:focus {
      outline: none;
      border-color: ${theme.colors.primary[500]};
    }

    ${error && inputModifiers.error(theme)}
  `}
`
