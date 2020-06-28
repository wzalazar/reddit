import styled from 'styled-components'

export const Button = styled.button`
  appearance: none;
  background: none;
  font-size: 14px;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  color: ${(props) => props.theme.colors.blue};
  padding-bottom: 4px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.blueOpacity('0.1')};
  border-radius: 2px;
  transition: all 0.15s;

  :hover,
  :focus {
    border: 2px solid ${(props) => props.theme.colors.blueOpacity('0.4')};
  }

  :active {
    background-color: ${(props) => props.theme.colors.blueOpacity('0.2')};
  }
`
