import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const UserDataFormWrapper = styled.form`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall} ${theme.spacings.small} ${theme.spacings.xxsmall};
    display: flex;
    flex-direction: column;

    fieldset {
      margin-top: ${theme.spacings.xxlarge};

      @media ${theme.media.greaterThan('medium')} {
        margin-top: ${theme.spacings.xxlarge};
      }
    }

    @media ${theme.media.greaterThan('medium')} {
      max-width: ${theme.grid.container};
      width: 100%;
      margin: 0 auto;
    }
  `}
`;

export const UserImageWrapper = styled.div`
  ${({ theme }) => css`
    width: 18.4rem;
    height: 18.4rem;
    margin: ${theme.spacings.xxlarge} auto 0 auto;
    cursor: pointer;

    img {
      width: 18.4rem;
      height: 18.4rem;
      border-radius: 50%;
      border: 1px solid ${theme.colors.gray.line};
    }
  `}
`;

export const Title = styled.legend`
  ${({ theme }) => css`
    font-family: ${theme.font.heading};
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.gray.titleActive};
    padding-bottom: ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.gray.line};
    margin-bottom: ${theme.spacings.medium};
    width: 100%;
  `}
`;

export const Button = styled.div`
  margin-top: 8rem;
`;
