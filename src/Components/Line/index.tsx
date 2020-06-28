import styled from 'styled-components'

type Props = {
  height: string
}

export const Line = styled.hr<Props>`
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.colors.gray};
  border: none;
  margin: 0;
  padding: 0;
  width: 100%;
`
