import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 1fr;
`

export const ImageWrapper = styled.div`
  grid-area: 1/1;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  animation: placeholderShimmer 1s linear infinite forwards;

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const PostInfoWrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    border: 1px solid ${theme.colors.gray.line};
    border-top-width: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`

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
`

export const UserImage = styled.img<{ src: string }>`
  ${({ theme, src }) => css`
    background-image: url(${src});
    background-size: cover;
    width: ${theme.spacings.medium};
    height: ${theme.spacings.medium};
    border-radius: 50%;
  `}
`

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
`

export const PostCreatedDate = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xsmall};
    line-height: 1.5rem;
    color: ${theme.colors.gray.placeholder};
    margin-top: 0.4rem;
  `}
`

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
`

export const LikesWrapper = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    color: ${theme.colors.gray.body};
  `}
`

export const Likes = styled.span`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.medium};
    color: ${theme.colors.gray.label};
  `}
`

export const CommentsWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray.body};
    display: flex;
    align-items: center;
  `}
`

export const Comments = styled.span`
  ${({ theme }) => css`
    margin-right: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.medium};
    color: ${theme.colors.gray.label};
  `}
`
