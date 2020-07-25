import React from 'react'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import nock from 'nock'

import { URLReddit } from 'Features/PostReddit/API/Reddit'

import { App } from './helpers/App'
import { createReply, data } from './helpers'

describe('when click on dismiss', () => {
  it('Should hide the post', async () => {
    const post = data.post
    const reply = createReply([post])

    nock(URLReddit)
      .get('/top.json')
      .query(true)
      .reply(200, () => reply, { 'Access-Control-Allow-Origin': '*' })

    const { queryByText } = render(<App />)

    await waitFor(() => screen.getByTestId(post.id.toString()))

    fireEvent.click(screen.getByText('Dismiss'))
    fireEvent.animationEnd(screen.getByText('Dismiss'))

    expect(queryByText(new RegExp(post.title))).toBeNull()
  })
})
