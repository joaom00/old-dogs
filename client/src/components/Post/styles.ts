import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Wrapper = styled.li`
  overflow: hidden;
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

export const UserImage = styled.img`
  ${({ theme }) => css`
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

export const PostImage = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr;

    &:hover ${Icons} {
      opacity: 1;
    }

    img {
      grid-area: 1/1;
      width: 100%;
      max-height: 60rem;
      object-fit: cover;
    }

    ${Icons} {
      background: rgba(0, 0, 0, 0.5);
      grid-area: 1/1;
      justify-content: center;
      opacity: 0;
    }

    ${Likes}, ${TotalLikes}, ${Comments}, ${TotalComments} {
      color: ${theme.colors.gray.offWhite};
    }

  `}
`;

export const PostImageLink = styled(Link)`
  ${({ theme }) => css`
  display: grid;
  grid-template-columns: 1fr;

  &:hover ${Icons} {
    opacity: 1;
  }

  img {
    width: 100%;
    grid-area: 1/1;
  }

  ${Icons} {
    background: rgba(0, 0, 0, 0.5);
    grid-area: 1/1;
    justify-content: center;
    opacity: 0;
  }

  ${Likes}, ${TotalLikes}, ${Comments}, ${TotalComments} {
    color: ${theme.colors.gray.offWhite};
  }

  `}
`;
