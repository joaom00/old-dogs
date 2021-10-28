import styled, { css } from 'styled-components'

type WrapperProps = {
  isOpen: boolean
}

const modifiers = {
  open: () => css`
    opacity: 1;
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: ${theme.layers.overlay};
    background-color: rgba(0, 0, 0, 0.7);

    display: flex;
    justify-content: center;
    align-items: center;

    ${isOpen && modifiers.open}
    ${!isOpen && modifiers.close}
  `}
`

export const Close = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: right;
    color: ${theme.colors.gray.offWhite};
    padding-top: ${theme.spacings.small};
    padding-right: ${theme.spacings.small};

    svg {
      cursor: pointer;
    }
  `}
`

export const Modal = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.modal};
    width: 93.5rem;
    height: 60rem;
    background: white;

    display: flex;

    & > img {
      object-fit: cover;
    }
  `}
`

export const PostContentWrapper = styled.form`
  flex: 1;

  display: flex;
  flex-direction: column;
`

export const PostHeader = styled.header`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.gray.line};

    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall};

    img {
      width: ${theme.spacings.large};
      height: ${theme.spacings.large};
      border-radius: 50%;
      object-fit: cover;
      margin-right: ${theme.spacings.xsmall};
      border: 1px solid ${theme.colors.gray.line};
    }

    p {
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};
      color: ${theme.colors.gray.titleActive};
    }
  `}
`

export const TrashIconWrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.error};
    margin-left: auto;
    cursor: pointer;
  `}
`

export const PostDescriptions = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.medium};
    line-height: 2.2rem;
    margin-top: ${theme.spacings.small};
  `}
`

export const CommentsWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 0 ${theme.spacings.xsmall} ${theme.spacings.xsmall} ${theme.spacings.xsmall};
    overflow-y: scroll;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    & + & {
      margin-top: ${theme.spacings.small};
    }
  `}
`

export const DescriptionWrapper = styled.div`
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

export const Description = styled.div`
  ${({ theme }) => css`
    grid-area: comment;
    display: flex;
    align-items: center;
    align-self: start;

    a {
      font-size: ${theme.font.sizes.small};
      font-weight: ${theme.font.bold};
      margin-right: 0.4rem;
      color: ${theme.colors.gray.titleActive};

      &:hover {
        text-decoration: underline;
      }
    }

    p {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.gray.titleActive};
      font-weight: ${theme.font.normal};
      line-height: 2.2rem;
    }
  `}
`

export const DescriptionDateInfo = styled.span`
  ${({ theme }) => css`
    grid-area: commentInfo;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray.placeholder};
  `}
`

export const NewCommentInputWrapper = styled.div`
  margin-top: auto;
  position: relative;
`

export const NewCommentInput = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
    border: none;
    outline: none;
    border-top: 1px solid ${theme.colors.gray.line};

    &::placeholder {
      color: ${theme.colors.gray.placeholder};
    }
  `}
`

export const NewCommentButton = styled.button`
  ${({ theme }) => css`
    background: none;
    outline: none;
    border: none;
    position: absolute;
    right: 1.6rem;
    top: 50%;
    transform: translateY(-50%);
    text-transform: uppercase;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.primary[500]};
    font-size: ${theme.font.sizes.xsmall};
    letter-spacing: 0.08em;
  `}
`
