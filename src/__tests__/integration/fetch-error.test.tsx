import React from 'react'
import nock from 'nock'
import { render } from '@testing-library/react'

import { URLReddit } from 'Features/PostReddit/API/Reddit'

import { App } from './helpers/App'

describe('when fetch response with an error', () => {
  it('should show the error', () => {
    nock(URLReddit).get('/top.json').reply(500)

    const { getByText } = render(<App />)

    // TODO ceate error page
    expect(getByText(/50 entries from Reddit/i)).toBeInTheDocument()
  })
})
