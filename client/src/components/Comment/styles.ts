import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 48px 1fr;
    grid-template-areas: 'img comment' 'x commentInfo';
    margin-top: ${theme.spacings.medium};
    img {
      grid-area: img;
      width: ${theme.spacings.medium};
      height: ${theme.spacings.medium};
      border-radius: 50%;
      object-fit: cover;
      border-color: ${theme.colors.gray.line};
    }
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    grid-area: comment;
    display: flex;
    align-items: center;
    align-self: start;

    svg {
      margin-left: auto;
      cursor: pointer;
      color: ${theme.colors.error};
    }
  `}
`

export const Content = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray.titleActive};
    font-weight: ${theme.font.normal};
    line-height: 2.2rem;
  `}
`

export const Username = styled(Link)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    margin-right: 0.4rem;
    color: ${theme.colors.gray.titleActive};

    &:hover {
      text-decoration: underline;
    }
  `}
`

export const CommentDateInfo = styled.span`
  ${({ theme }) => css`
    grid-area: commentInfo;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray.placeholder};
  `}
`
