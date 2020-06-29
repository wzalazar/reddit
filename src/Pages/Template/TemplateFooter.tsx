import React, { ReactNode, FC } from 'react'
import { Footer } from 'Components/Footer'
import { Position } from 'Components/Position'
import { Line } from 'Components/Line'

type Props = {
  children: ReactNode
}

export const TemplateFooter: FC<Props> = ({ children }) => (
  <Position position="fixed" bottom="0" width="100%">
    <Line height="10px" />
    <Footer>{children}</Footer>
  </Position>
)
