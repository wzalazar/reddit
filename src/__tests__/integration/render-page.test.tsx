import React from 'react'
import nock from 'nock'
import { render } from '@testing-library/react'

import { URLReddit } from 'Features/PostReddit/API/Reddit'

import { App } from './helpers/App'
import { createReply, data } from './helpers'

describe('when render the page', () => {
  it('should render 50 entries from Reddit', () => {
    const post = data.post
    const reply = createReply([post])

    nock(URLReddit)
      .get('/top.json')
      .query({ limit: 50 })
      .reply(200, () => reply, { 'Access-Control-Allow-Origin': '*' })

    const { getByText } = render(<App />)

    expect(getByText(/50 entries from Reddit/i)).toBeInTheDocument()
  })
})
