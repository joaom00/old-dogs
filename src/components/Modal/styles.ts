import styled, { css } from 'styled-components';

type WrapperProps = {
  isOpen: boolean;
};

const modifiers = {
  open: () => css`
    opacity: 1;
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
};

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
`;

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
`;

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
`;

export const PostContentWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

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
`;

export const PostDescriptions = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.medium};
    line-height: 2.2rem;
    margin-top: ${theme.spacings.small};
  `}
`;

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
`;

export const NewCommentInputWrapper = styled.div`
  margin-top: auto;
  position: relative;
`;

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
`;

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
`;
