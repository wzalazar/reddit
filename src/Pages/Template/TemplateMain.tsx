import React, { ReactNode, FC } from 'react'

import { Layout } from 'Components/Layout'
import { Flex } from 'Components/Flex'
import styled from 'styled-components'

type Props = {
  sidebar: ReactNode
  main: ReactNode
}

const Scroll = styled.div`
  overflow-y: scroll;
  height: 100vh;
  width: 100%;
`

export const TemplateMain: FC<Props> = ({ sidebar, main }) => (
  <Layout>
    <Flex>
      <Flex width="30%">
        <Scroll>{sidebar}</Scroll>
      </Flex>

      <Flex width="70%">{main}</Flex>
    </Flex>
  </Layout>
)
