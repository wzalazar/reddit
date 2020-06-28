import React from 'react'

import { Card } from 'Components/Card'
import { Space } from 'Components/Space'
import { Button } from 'Components/Button'
import { Flex } from 'Components/Flex'

import { useRedditActions } from './Hooks/useRedditActions'

export const Post = () => {
  const { pages, onFetchMore } = useRedditActions()

  return (
    <Flex wrap="wrap" justify="center">
      {pages.map(([page, posts = []]: any) => (
        <React.Fragment key={page}>
          {posts.map((post: any) => (
            <Space key={`${page}-${post.id}`} m="10px" width="100%">
              <Card {...post} />
            </Space>
          ))}
        </React.Fragment>
      ))}
      <Space m="30px">
        <Button onClick={onFetchMore}>Fetch More</Button>
      </Space>
    </Flex>
  )
}
