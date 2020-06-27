import styled from 'styled-components'

export const Header = styled.header`
  height: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-bottom-color: ${(props) => props.theme.colors.whiteGray};
  width: 100%;
`
