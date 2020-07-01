import React from 'react'
import nock from 'nock'
import { render } from '@testing-library/react'

import { Application } from 'Application'

import { URLReddit } from 'Features/PostReddit/API/Reddit'
import { createReply, data } from './helpers'

describe('when render the page', () => {
  it('should render 50 entries from Reddit', () => {
    const post = data.post
    const reply = createReply([post])

    nock(URLReddit)
      .get('/top.json')
      .query({ limit: 50 })
      .reply(200, () => reply, { 'Access-Control-Allow-Origin': '*' })

    const { getByText } = render(<Application />)

    expect(getByText(/50 entries from Reddit/i)).toBeInTheDocument()
  })
})
