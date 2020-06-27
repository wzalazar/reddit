import styled from 'styled-components'

type Props = {
  justify?: string
  align?: string
  wrap?: string
}

export const Flex = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => (props.justify ? props.justify : '')};
  align-items: ${(props) => (props.align ? props.align : '')};
  flex-wrap: ${(props) => (props.wrap ? props.wrap : '')};
`
