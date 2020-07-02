import React from 'react'
import nock from 'nock'
import { render, screen, waitFor } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import { URLReddit } from 'Features/PostReddit/API/Reddit'

import { App } from './helpers/App'
import { createReply, data } from './helpers'

jest.mock('react-use-breakpoints', () => ({
  useWindowSize: () => ({
    outerWidth: 767,
  }),
}))

jest.mock('Features/PostReddit/Hooks/useQuery', () => ({
  useQuery: () => ({
    view: true,
  }),
}))

describe('when navigate to post details page', () => {
  it('should change the route', async () => {
    const post = data.post
    const reply = createReply([post])

    nock(URLReddit)
      .get('/top.json')
      .query({ limit: 50 })
      .reply(200, () => reply, { 'Access-Control-Allow-Origin': '*' })

    const history = createMemoryHistory({ initialEntries: [`/posts?page=0&id=${post.id}&view=true`] })

    render(<App history={history} />)

    await waitFor(() => screen.getByTestId('go-back'))
  })
})
