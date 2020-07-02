import React from 'react'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import nock from 'nock'

import { URLReddit } from 'Features/PostReddit/API/Reddit'

import { App } from './helpers/App'
import { createReply, data } from './helpers'

describe('when click on Fetch More', () => {
  it('Should retrive more post', async () => {
    const post1 = data.post
    const post2 = data.post
    const reply1 = createReply([post1])
    const reply2 = createReply([post2])

    nock(URLReddit)
      .get('/top.json')
      .query({ limit: 50 })
      .reply(200, () => reply1, { 'Access-Control-Allow-Origin': '*' })

    const { unmount } = render(<App />)

    await waitFor(() => screen.getByTestId(post1.id.toString()))

    expect(screen.getByText(new RegExp(post1.title))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(post1.author))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(post1.num_comments))).toBeInTheDocument()

    nock(URLReddit)
      .get('/top.json')
      .query({ limit: 50, after: reply1.data.after })
      .reply(200, () => reply2, { 'Access-Control-Allow-Origin': '*' })

    fireEvent.click(screen.getByText('Fetch More'))

    await waitFor(() => screen.getByTestId(post2.id.toString()))

    expect(screen.getByText(new RegExp(post2.title))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(post2.author))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(post2.num_comments))).toBeInTheDocument()

    unmount()
  })
})
