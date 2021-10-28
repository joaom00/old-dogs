import styled, { css } from 'styled-components'
import Container from '../../components/Container'

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxxlarge};
  `}
`
