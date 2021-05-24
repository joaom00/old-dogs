import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Main = styled.main`
  ${({ theme }) => css`
    width: 100%;
    max-width: 61.6rem;
    margin: ${theme.spacings.medium} auto 0 auto;
  `}
`;

export const Post = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.gray.line};
    overflow: hidden;

    & + & {
      margin-top: ${theme.spacings.medium};
    }
  `}
`;

export const PostImage = styled.div`
  object-fit: cover;
`;

export const PostInfoWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};

    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const UserImage = styled.img`
  ${({ theme }) => css`
    background-size: cover;
    width: ${theme.spacings.medium};
    height: ${theme.spacings.medium};
    border-radius: 50%;
  `}
`;

export const PostInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    span {
      margin-left: ${theme.spacings.xxsmall};

      p:first-child {
        font-weight: ${theme.font.bold};
        font-size: ${theme.font.sizes.small};
        line-height: 1.9rem;
        color: ${theme.colors.gray.titleActive};
      }

      p:last-child {
        font-weight: ${theme.font.normal};
        font-size: ${theme.font.sizes.xsmall};
        line-height: 1.5rem;
        color: ${theme.colors.gray.placeholder};
      }

      p + p {
        margin-top: 0.4rem;
      }
    }
  `}
`;

export const Icons = styled.div`
  ${({ theme }) => css`
    svg {
      cursor: pointer;
    }

    svg + svg {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;
