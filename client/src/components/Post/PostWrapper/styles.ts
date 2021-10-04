import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import {
  IconsWrapper,
  LikesWrapper,
  Likes,
  CommentsWrapper,
  Comments
} from '../styles';

export const PostImage = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    display: grid;
    grid-template-columns: 1fr;

    &:hover ${IconsWrapper} {
      opacity: 1;
    }

    img {
      grid-area: 1/1;
      width: 100%;
      max-height: 60rem;
      object-fit: cover;
    }

    ${IconsWrapper} {
      background: rgba(0, 0, 0, 0.5);
      grid-area: 1/1;
      justify-content: center;
      opacity: 0;
    }

    ${LikesWrapper}, ${Likes}, ${CommentsWrapper}, ${Comments} {
      color: ${theme.colors.gray.offWhite};
    }
  `}
`;

export const PostImageLink = styled(Link)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;

    &:hover ${IconsWrapper} {
      opacity: 1;
    }

    img {
      width: 100%;
      grid-area: 1/1;
    }

    ${IconsWrapper} {
      background: rgba(0, 0, 0, 0.5);
      grid-area: 1/1;
      justify-content: center;
      opacity: 0;
    }

    ${LikesWrapper}, ${Likes}, ${CommentsWrapper}, ${Comments} {
      color: ${theme.colors.gray.offWhite};
    }
  `}
`;
