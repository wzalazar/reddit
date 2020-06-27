import React from 'react'
import { ImageFloat } from 'Components/ImageFloat'
import { Flex } from 'Components/Flex'
import { Img } from 'Components/Img'
import { Space } from 'Components/Space'

import logo from './logo.svg'
import reddit from './reddit.svg'

export const Logo = () => (
  <Flex justify="center" align="center">
    <ImageFloat height={'30px'} src={logo} t={2} alt="logo" />
    <Space ml="8px">
      <Img height={'18px'} src={reddit} alt="Reddit" />
    </Space>
  </Flex>
)
