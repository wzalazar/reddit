import React from 'react'
import { render, waitFor, screen, fireEvent, waitForElementToBeRemoved } from '@testing-library/react'
import nock from 'nock'

import { URLReddit } from 'Features/PostReddit/API/Reddit'

import { App } from './helpers/App'
import { createReply, data } from './helpers'

describe('when click on dismiss all', () => {
  it('Should hide all posts', async () => {
    const post1 = data.post
    const post2 = data.post
    const reply = createReply([post1, post2])

    nock(URLReddit)
      .get('/top.json')
      .query({ limit: 50 })
      .reply(200, () => reply, { 'Access-Control-Allow-Origin': '*' })

    const { unmount, queryByText } = render(<App />)

    await waitFor(() => screen.getByTestId(post1.id.toString()))

    fireEvent.click(screen.getByText('Dismiss All'))

    await waitForElementToBeRemoved(() => queryByText(new RegExp(post1.title)))

    expect(screen.queryByText(post2.title)).not.toBeInTheDocument()

    unmount()
  })
})
