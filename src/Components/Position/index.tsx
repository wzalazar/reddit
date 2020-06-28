import styled from 'styled-components'

type Props = {
  position: 'absolute' | 'relative' | 'fixed'
  top?: string
  bottom?: string
  left?: string
  rigth?: string
  width?: string
}

export const Position = styled.div<Props>`
  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.rigth};
  width: ${(props) => props.width};
  z-index: 9999;
`
