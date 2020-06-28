import styled, { keyframes, css } from 'styled-components'

const removePost = keyframes`
  0% {
    margin-left: 0;
    z-index: 0;
  }
  40% {
    margin-left: -150px;
  }
  40% {
    height: 150px;
  }
  100% {
    margin-left: -650px;
    height: 0;
    opacity: 0;
    z-index: -1;
  }
`

type Props = {
  isDismissing: boolean
}

const animation = () =>
  css`
    ${removePost} 0.5s linear forwards;
  `

export const RemovePostAnimation = styled.div<Props>`
  ${({ isDismissing }: any) =>
    isDismissing &&
    css`
      animation: ${animation};
    `}
`
