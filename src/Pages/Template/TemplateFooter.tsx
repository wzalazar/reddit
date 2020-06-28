import React from 'react'
import { Footer } from 'Components/Footer'
import { Position } from 'Components/Position'
import { Line } from 'Components/Line'

export const TemplateFooter = () => (
  <Position position="fixed" bottom="0" width="100%">
    <Line height="10px" />
    <Footer>
      <p>Footer</p>
    </Footer>
  </Position>
)
