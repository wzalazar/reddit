import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import nock from 'nock'

import { Application } from 'Application'
import { URLReddit } from 'Features/PostReddit/API/Reddit'
import { createReply, data } from './helpers'

describe('when fetch the post', () => {
  it('Should render the post', async () => {
    const post = data.post
    const reply = createReply([post])

    nock(URLReddit)
      .get('/top.json')
      .query({ limit: 50 })
      .reply(200, () => reply, { 'Access-Control-Allow-Origin': '*' })

    render(<Application />)

    await waitFor(() => screen.getByTestId(post.id.toString()))

    expect(screen.getByText(new RegExp(post.title))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(post.author))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(post.num_comments))).toBeInTheDocument()
    expect(screen.getByLabelText('author-image').getAttribute('src')).toBe(post.thumbnail)
    expect(screen.getByLabelText('post-image').getAttribute('src')).toBe(post.thumbnail)
  })
})
