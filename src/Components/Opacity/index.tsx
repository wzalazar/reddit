import styled from 'styled-components'

type Props = {
  opacity: number
}

export const Opacity = styled.div<Props>`
  opacity: ${(props) => props.opacity};
`
