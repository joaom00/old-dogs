import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';

export const Wrapper = styled.li`
  overflow: hidden;
`;

export const HeartLike = styled(AiFillHeart)`
  grid-area: 1/1;
  z-index: 9999;
  align-self: center;
  justify-self: center;
  transform: scale(0);
  animation: heartAnimation 0.5s ease-in-out backwards;

  @keyframes heartAnimation {
    from {
      transform: scale(0);
      opacity: 1;
    }
    to {
      transform: scale(1);
      opacity: 0;
    }
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

export const PostInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    span {
      margin-left: ${theme.spacings.xxsmall};

      p + p {
        margin-top: 0.4rem;
      }
    }
  `}
`;

export const UserImage = styled.img<{ src: string }>`
  ${({ theme, src }) => css`
    background-image: url(${src});
    background-size: cover;
    width: ${theme.spacings.medium};
    height: ${theme.spacings.medium};
    border-radius: 50%;
  `}
`;

export const Username = styled(Link)`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    line-height: 1.9rem;
    color: ${theme.colors.gray.titleActive};

    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const PostCreatedDate = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xsmall};
    line-height: 1.5rem;
    color: ${theme.colors.gray.placeholder};
    margin-top: 0.4rem;
  `}
`;

export const IconsWrapper = styled.div`
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

export const LikesWrapper = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    color: ${theme.colors.gray.body};
  `}
`;

export const Likes = styled.span`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.medium};
    color: ${theme.colors.gray.label};
  `}
`;

export const CommentsWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray.body};
    display: flex;
    align-items: center;
  `}
`;

export const Comments = styled.span`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.medium};
    color: ${theme.colors.gray.label};
  `}
`;
