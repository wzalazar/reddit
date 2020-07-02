import React from 'react'
import nock from 'nock'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import { URLReddit } from 'Features/PostReddit/API/Reddit'

import { App } from './helpers/App'
import { createReply, data } from './helpers'

describe('when navigate to post details page', () => {
  it('should change the route', async () => {
    const post = data.post
    const reply = createReply([post])

    nock(URLReddit)
      .get('/top.json')
      .query({ limit: 50 })
      .reply(200, () => reply, { 'Access-Control-Allow-Origin': '*' })

    const history = createMemoryHistory({ initialEntries: [`/`] })

    render(<App history={history} />)

    await waitFor(() => screen.getByTestId(post.id.toString()))

    fireEvent.click(screen.getByText(post.title))

    expect(history.location.pathname).toBe('/posts')
    expect(history.location.search).toBe(`?page=0&id=${post.id}&view=true`)
  })
})
