import styled, { css } from 'styled-components';

import { ForgotPasswordForm } from '../../pages/ForgotPassword/styles';
import { SignInForm } from '../../pages/SignIn/styles';
import { SignUpForm } from '../../pages/SignUp/styles';

type WrapperProps = {
  fullWidth: boolean;
};

const modifiers = {
  fullWidth: () => css`
    width: 100%;
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, fullWidth }) => css`
    background: ${theme.colors.primary[500]};
    color: ${theme.colors.primary[800]};
    border-radius: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    outline: none;
    border: none;
    padding: ${theme.spacings.xsmall} 0;
    transition: all 0.1s;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    width: 28.4rem;

    ${fullWidth && modifiers.fullWidth};

    &:hover {
      filter: brightness(0.95);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px ${theme.colors.primary[200]},
        0 0 0 4px ${theme.colors.primary[500]};
    }

    ${SignInForm} &, ${SignUpForm} &, ${ForgotPasswordForm} & {
      margin-top: ${theme.spacings.xlarge};
    }
  `}
`;
