import React from 'react'
import { Reset } from 'styled-reset'

import { Providers } from './Providers'
import { Routes } from './Routes'
import { GlobalStyles } from './GlobalStyles'

export const Application = () => (
  <Providers>
    <Reset />
    <GlobalStyles />
    <Routes />
  </Providers>
)
