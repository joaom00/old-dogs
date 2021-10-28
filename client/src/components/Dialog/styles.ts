import styled, { css } from 'styled-components'

type WrapperProps = {
  isOpen: boolean
}

const modifiers = {
  open: () => css`
    opacity: 1;
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: ${theme.layers.alwaysOnTop};
    background-color: rgba(0, 0, 0, 0.7);

    display: flex;
    justify-content: center;
    align-items: center;

    ${isOpen && modifiers.open}
    ${!isOpen && modifiers.close}
  `}
`

export const DialogWrapper = styled.div`
  ${({ theme }) => css`
    width: 400px;
    height: 150px;
    background-color: ${theme.colors.gray.offWhite};
    border-radius: ${theme.border.radius.small};

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.small};

    button + button {
      margin-left: ${theme.spacings.small};
    }
  `}
`
