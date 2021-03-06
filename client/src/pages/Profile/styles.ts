import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div``

export const ProfileWrapper = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray.line};
    padding: ${theme.spacings.large} 0;

    @media ${theme.media.greaterThan('medium')} {
      padding: ${theme.spacings.xxlarge};
    }
  `}
`

export const Profile = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.small};

    > input {
      display: none;
    }

    @media ${theme.media.greaterThan('medium')} {
      justify-content: flex-start;
      align-items: flex-start;
      padding: 0 8.3rem;
      gap: ${theme.spacings.xxlarge};
    }
  `}
`

export const ProfileImage = styled.img`
  ${({ theme }) => css`
    width: 8.4rem;
    height: 8.4rem;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;

    @media ${theme.media.greaterThan('medium')} {
      width: 18.4rem;
      height: 18.4rem;
    }
  `}
`

export const ProfileInfoWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
  `}
`

export const Username = styled.h3`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.gray.titleActive};
  `}
`

export const ProfileInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
  `}
`

export const Strong = styled.strong`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray.titleActive};
    font-size: ${theme.font.sizes.medium};
    margin-right: 0.4rem;
  `}
`

export const Data = styled.p`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.gray.titleActive};
    font-size: ${theme.font.sizes.small};

    @media ${theme.media.greaterThan('medium')} {
      flex-direction: row;
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export const HasNoPosts = styled.p`
  ${({ theme }) => css`
    text-align: center;
    margin-top: ${theme.spacings.xxxlarge};
  `}
`

export const NewPhotoLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.primary[600]};
  `}
`

export const Feed = styled.ul`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    width: 100%;
    margin: ${theme.spacings.medium} auto;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 0.4rem;

    img {
      width: 100%;
    }
  `}
`

export const ErrorHeading = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    text-align: center;
    color: ${theme.colors.gray.titleActive};
    margin-top: ${theme.spacings.xxxlarge};
  `}
`

export const ErrorDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    text-align: center;
    color: ${theme.colors.gray.label};
    margin-top: ${theme.spacings.large};
  `}
`
