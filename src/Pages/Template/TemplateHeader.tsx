import React from 'react'
import styled from 'styled-components'

import { Header } from 'Components/Header'
import { Position } from 'Components/Position'
import { Logo } from 'Components/Logo'
import { Flex } from 'Components/Flex'
import { Line } from 'Components/Line'
import { FeaturePostGoBack } from 'Features/PostReddit/FeaturePostGoBack'

const Desktop = styled(Flex)`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`

const LogoPosition = styled(Flex)`
  position: absolute;
  right: 15px;

  @media only screen and (min-width: 768px) {
    left: 30px;
  }
`

export const TemplateHeader = () => (
  <Position position="fixed" top="0" width="100%">
    <Header>
      <FeaturePostGoBack />
      <LogoPosition>
        <Logo />
      </LogoPosition>
      <Desktop align="center">
        <h4>50 entries from Reddit </h4>
      </Desktop>
    </Header>
    <Line height="10px" />
  </Position>
)
