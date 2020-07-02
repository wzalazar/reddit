import React from 'react'
import nock from 'nock'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'

import { URLReddit } from 'Features/PostReddit/API/Reddit'

import { App } from './helpers/App'
import { createReply, data } from './helpers'

jest.mock('Features/PostReddit/Hooks/useQuery', () => ({
  useQuery: () => ({
    view: true,
    page: 0,
    id: 1,
  }),
}))

describe('when render the post details page and dissmiss', () => {
  it('should render Nothing to see here, Opps!', async () => {
    const post = {
      ...data.post,
      isDismiss: true,
      id: 1,
    }

    const reply = createReply([post])

    nock(URLReddit)
      .get('/top.json')
      .query({ limit: 50 })
      .reply(200, () => reply, { 'Access-Control-Allow-Origin': '*' })

    const history = createMemoryHistory({ initialEntries: [`/`] })

    render(<App history={history} />)

    await waitFor(() => screen.getByTestId(post.id.toString()))
    fireEvent.click(screen.getByText('Dismiss'))

    await waitFor(() => screen.getByText('Nothing to see here, Opps!'))
  })
})
