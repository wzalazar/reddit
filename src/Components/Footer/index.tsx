import styled from 'styled-components'

export const Footer = styled.footer`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  border-top-color: ${(props) => props.theme.colors.whiteGray};
  width: 100%;
`
