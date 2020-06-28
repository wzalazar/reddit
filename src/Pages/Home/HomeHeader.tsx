import React from 'react'
import { Header } from 'Components/Header'
import { Position } from 'Components/Position'
import { Logo } from 'Components/Logo'
import { Flex } from 'Components/Flex'

export const HomeHeader = () => (
  <Position position="fixed" top="0" width="100%">
    <Header>
      <Position position="absolute" left="30px">
        <Logo />
      </Position>
      <Flex align="center">
        <h4>50 entries from Reddit </h4>
      </Flex>
    </Header>
  </Position>
)
