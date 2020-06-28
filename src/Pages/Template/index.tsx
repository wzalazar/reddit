import React, { ReactNode, FC } from 'react'

import { Flex } from 'Components/Flex'

import { TemplateHeader } from './TemplateHeader'
import { TemplateMain } from './TemplateMain'
import { TemplateFooter } from './TemplateFooter'

type Props = {
  sidebar: ReactNode
  main: ReactNode
}

export const Template: FC<Props> = ({ sidebar, main }) => (
  <Flex wrap={'wrap'}>
    <TemplateHeader />
    <TemplateMain sidebar={sidebar} main={main} />
    <TemplateFooter />
  </Flex>
)
