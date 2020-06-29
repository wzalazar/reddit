import styled, { keyframes, css } from 'styled-components'

const removePost = keyframes`
  0% {
    overflow: hidden;
    margin-left: 0;
    z-index: 0;
  }
  40% {
    margin-left: -250px;
  }
  100% {
    overflow: hidden;
    margin-left: -650px;
    height: 0;
    opacity: 0;
    z-index: -1;
    position: absolute;
    top: 0;
  }
`

type Props = {
  isDismissing: boolean
}

const animation = () =>
  css`
    ${removePost} 1s linear forwards;
  `

export const RemovePostAnimation = styled.div<Props>`
  ${({ isDismissing }: any) =>
    isDismissing &&
    css`
      animation: ${animation};
    `}
`
