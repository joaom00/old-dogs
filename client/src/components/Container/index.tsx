import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
  `}
`

export default Container
