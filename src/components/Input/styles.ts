import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    & + & {
      margin-top: ${theme.spacings.small};
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray.label};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray.line};
    background: none;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    border-radius: ${theme.spacings.xxsmall};
    font-family: inherit;
    color: ${theme.colors.gray.titleActive};
    font-size: ${theme.font.sizes.medium};

    &:focus {
      outline: none;
      border-color: ${theme.colors.primary[500]};
    }
  `}
`;
