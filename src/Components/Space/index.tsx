import styled from 'styled-components'

type Props = {
  m?: string
  mt?: string
  mr?: string
  mb?: string
  ml?: string
  p?: string
  pt?: string
  pr?: string
  pb?: string
  pl?: string
}

export const Space = styled.div<Props>`
  padding: ${(props) => props.p};
  padding-top: ${(props) => props.pt};
  padding-right: ${(props) => props.pr};
  padding-bottom: ${(props) => props.pb};
  padding-left: ${(props) => props.pl};
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt};
  margin-right: ${(props) => props.mr};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
`
