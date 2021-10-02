import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray.label};
  `}
`;

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    resize: none;
    border: 1px solid ${theme.colors.gray.line};
    background: none;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    border-radius: ${theme.spacings.xxsmall};
    font-family: inherit;
    color: ${theme.colors.gray.titleActive};
    font-size: ${theme.font.sizes.medium};
    width: 100%;
    height: 14.1rem;
    margin-top: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xlarge};

    &:focus {
      outline: none;
      border-color: ${theme.colors.primary[500]};
    }
  `}
`;
