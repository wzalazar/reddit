import React from 'react'
import nock from 'nock'
import { render, screen, waitFor } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import { URLReddit } from 'Features/PostReddit/API/Reddit'

import { App } from './helpers/App'
import { createReply, data } from './helpers'

describe('when route not found', () => {
  it('should render the route not found', async () => {
    const post = data.post
    const reply = createReply([post])

    nock(URLReddit)
      .get('/top.json')
      .query({ limit: 50 })
      .reply(200, () => reply, { 'Access-Control-Allow-Origin': '*' })

    const history = createMemoryHistory({ initialEntries: [`/any-page`] })

    render(<App history={history} />)

    await waitFor(() => screen.getByTestId('not-found-page'))
  })
})
