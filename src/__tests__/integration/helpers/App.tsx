import React from 'react'
import { Application } from 'Application'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

const historyCustom = createMemoryHistory()

type Props = {
  history?: any
}

export const App = ({ history }: Props) => (
  <Router history={history || historyCustom}>
    <Application />
  </Router>
)
