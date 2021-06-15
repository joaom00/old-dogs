import styled, { css } from 'styled-components';

export const ShowRepliesButton = styled.button`
  ${({ theme }) => css`
    background: none;
    border: none;
    outline: none;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray.label};
    margin-top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;

    &::before {
      content: '';
      width: ${theme.spacings.small};
      height: 1px;
      background: ${theme.colors.gray.body};
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;
