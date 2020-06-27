import React from 'react'

import { Flex } from 'Components/Flex'

import { HomeHeader } from './HomeHeader'
import { HomeMain } from './HomeMain'
import { HomeFooter } from './HomeFooter'

export const Home = () => (
  <Flex wrap={'wrap'}>
    <HomeHeader />
    <HomeMain />
    <HomeFooter />
  </Flex>
)
