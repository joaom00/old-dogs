import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { IconsWrapper, LikesWrapper, Likes, CommentsWrapper, Comments } from '../styles'

export const PostImage = styled.div`
  ${({ theme }) => css`
    cursor: pointer;

    display: grid;
    grid-template-columns: 1fr;

    img {
      width: 100%;
      display: block;
      max-height: 60rem;
      object-fit: cover;
    }

    ${IconsWrapper} {
      grid-area: 1/1;
      justify-content: center;
      opacity: 0;
      background: rgba(0, 0, 0, 0.5);
    }

    &:hover ${IconsWrapper} {
      opacity: 1;
    }

    ${LikesWrapper}, ${Likes}, ${CommentsWrapper}, ${Comments} {
      color: ${theme.colors.gray.offWhite};
    }
  `}
`

export const PostImageLink = styled(Link)`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;

    img {
      width: 100%;
    }

    ${IconsWrapper} {
      background: rgba(0, 0, 0, 0.5);
      grid-area: 1/1;
      justify-content: center;
      opacity: 0;
    }

    &:hover ${IconsWrapper} {
      opacity: 1;
    }

    ${LikesWrapper}, ${Likes}, ${CommentsWrapper}, ${Comments} {
      color: ${theme.colors.gray.offWhite};
    }
  `}
`
