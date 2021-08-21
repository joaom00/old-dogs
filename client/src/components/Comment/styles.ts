import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: ${theme.spacings.medium};
    img {
      width: ${theme.spacings.medium};
      height: ${theme.spacings.medium};
      border-radius: 50%;
      object-fit: cover;
      border-color: ${theme.colors.gray.line};
    }
  `}
`;

export const Comment = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xsmall};
  `}
`;

export const Content = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray.titleActive};
    font-weight: ${theme.font.normal};
    line-height: 2.2rem;
  `}
`;

export const Username = styled(Link)`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    margin-right: 0.4rem;
    color: ${theme.colors.gray.titleActive};

    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const CommentInfo = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray.placeholder};
  `}
`;

export const CommentDate = styled.span``;
