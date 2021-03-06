import styled, { css } from 'styled-components'

import Container from '../../components/Container'

type DropzoneProps = {
  hasFile: string
}

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall} 0 ${theme.spacings.xxsmall};
    margin-top: ${theme.spacings.xxxlarge};
    margin-bottom: ${theme.spacings.small};

    form {
      display: flex;
      flex-direction: column;
    }
  `}
`

export const Dropzone = styled.div<DropzoneProps>`
  ${({ theme, hasFile }) => css`
    ${!hasFile &&
    css`
      width: 100%;
      height: 326px;
      margin: 0 auto;
      background-color: ${theme.colors.primary[100]};
      border-radius: 6px;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;
    `}

    img {
      display: block;
      width: 600px;
      height: 600px;
      object-fit: cover;
      margin: 0 auto;
    }
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    text-align: center;
    width: calc(100% - 44px);
    height: calc(100% - 42px);
    border-radius: 6px;
    border: 2px dashed ${theme.colors.primary[500]};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${theme.media.greaterThan('medium')} {
      width: calc(100% - 94px);
      height: calc(100% - 62px);
    }

    svg {
      margin-bottom: ${theme.spacings.xsmall};
      color: ${theme.colors.primary[500]};
    }
  `}
`
