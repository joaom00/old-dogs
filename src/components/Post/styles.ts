import styled, { css } from 'styled-components';

export const Wrapper = styled.li`
  ${({ theme }) => css`
    overflow: hidden;

    & + & {
      margin-top: ${theme.spacings.medium};
    }
  `}
`;

export const PostImage = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    max-height: 60rem;
    object-fit: cover;
  }
`;

export const PostInfoWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    border: 1px solid ${theme.colors.gray.line};
    border-top-width: 0;

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
    display: flex;
    svg {
      cursor: pointer;
    }

    svg + svg {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

export const Likes = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    color: ${theme.colors.gray.body};
  `}
`;

export const TotalLikes = styled.span`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.medium};
    color: ${theme.colors.gray.label};
  `}
`;

export const Comments = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray.body};
    display: flex;
    align-items: center;
  `}
`;

export const TotalComments = styled.span`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.medium};
    color: ${theme.colors.gray.label};
  `}
`;
