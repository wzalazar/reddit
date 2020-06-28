import React from 'react'
import { Link } from 'react-router-dom'

import { Card } from 'Components/Card'
import { Space } from 'Components/Space'
import { Button } from 'Components/Button'
import { Flex } from 'Components/Flex'

import { useRedditActions } from './Hooks/useRedditActions'

export const FeaturePosts = () => {
  const { pages, onFetchMore } = useRedditActions()

  return (
    <Flex wrap="wrap" justify="center">
      {pages.map(([page, posts = []]: any) => (
        <React.Fragment key={page}>
          {posts.map((post: any) => (
            <Space key={`${page}-${post.id}`} m="10px" width="100%">
              <Link
                to={{
                  pathname: '/posts',
                  search: `?page=${page}&id=${post.id}`,
                  state: { fromDashboard: true },
                }}
              >
                <Card {...post} />
              </Link>
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
