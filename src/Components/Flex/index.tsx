import styled from 'styled-components'

type Props = {
  justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'initial' | 'inherit'
  align?: 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  width?: string
  height?: string
  minWidth?: string
}

export const Flex = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-wrap: ${(props) => props.wrap};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-width: ${(props) => props.minWidth};
`
