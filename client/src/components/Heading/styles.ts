import styled, { css } from 'styled-components';

export const Wrapper = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-family: ${theme.font.heading};
    color: ${theme.colors.gray.titleActive};
    padding-bottom: ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.gray.line};
    margin-bottom: ${theme.spacings.medium};
    width: 100%;

    display: flex;
    justify-content: space-between;

    @media ${theme.media.greaterThan('medium')} {
      font-size: ${theme.font.sizes.xlarge};
    }

    span {
      font-size: ${theme.font.sizes.medium};
      font-family: ${theme.font.family};
      color: ${theme.colors.gray.placeholder};
      align-self: flex-end;
      margin-bottom: -1.1rem;
    }
  `}
`;
