import React from 'react'
import styled from 'styled-components'

import { Flex } from 'Components/Flex'
import { Space } from 'Components/Space'

import { LoadingAnimation } from 'Components/Animations'

const CardBox = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);
  height: 205px;
`

const HeaderColor = styled.div`
  background-color: #f8f9fa;
  height: 40px;
  width: 100%;
`

export const CardLoading = (): JSX.Element => (
  <CardBox>
    <Flex wrap="wrap">
      <HeaderColor>
        <Space p="20px 15px" width="80%">
          <Flex align="center" justify="space-between" width="100%">
            <LoadingAnimation height={'10px'} width={'100%'} />
            <Flex align="center" justify="center" />
            <Flex align="center" justify="center" />
          </Flex>
        </Space>
      </HeaderColor>
      <Space p="10px 15px" width="100%">
        <Flex width="100%">
          <LoadingAnimation height={'100px'} width={'30%'} />
        </Flex>
      </Space>
      <Space p="0px 15px 10px 15px" width="100%">
        <Flex align="center" justify="space-between" width="100%" />
        <LoadingAnimation height={'20px'} width={'60%'} />
      </Space>
    </Flex>
  </CardBox>
)
