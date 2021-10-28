import styled from 'styled-components'

import { NewCommentButton as ModalNewCommentButton } from '../Modal/styles'

export const Wrapper = styled.div`
  width: 30px;
  height: 30px;
  border: 4px rgba(0, 0, 0, 0.25) solid;
  border-top: 4px #ffbb12 solid;
  border-radius: 50%;
  -webkit-animation: spin2 1s infinite linear;
  animation: spin2 1s infinite linear;

  @-webkit-keyframes spin2 {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }

  @keyframes spin2 {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }

  ${ModalNewCommentButton} & {
    width: 20px;
    height: 20px;
  }
`
