import styled, { keyframes, css } from 'styled-components'

const loading = keyframes`
  0% {
    background-position: -468px 0
  }
  100% {
    background-position: 468px 0
  }
`

const animation = () =>
  css`
    ${loading};
  `

type Props = {
  width?: string
  height?: string
}

export const LoadingAnimation = styled.div<Props>`
  animation-name: ${animation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #ccc;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
`
