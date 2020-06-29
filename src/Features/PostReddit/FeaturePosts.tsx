import React from 'react'
import { Link } from 'react-router-dom'

import { Card } from 'Components/Card'
import { Space } from 'Components/Space'
import { Button } from 'Components/Button'
import { Flex } from 'Components/Flex'

import { RemovePostAnimation } from 'Components/Animations'

import { usePostsActions } from './Hooks/usePostsActions'

export const FeaturePosts = () => {
  const { pages, onFetchMore, onDismissPost, onViewedPosts } = usePostsActions()

  const handleDissmmissPost = (event: any, id: string): void => {
    event.preventDefault()
    onDismissPost(id)
  }

  return (
    <Flex wrap="wrap" justify="center">
      {pages.map(([page, posts = []]: any) => (
        <React.Fragment key={page}>
          {posts.map((post: any) => (
            <RemovePostAnimation key={`${page}-${post.id}`} isDismissing={post.isDismiss}>
              <Space m="10px">
                <Link
                  onClick={() => onViewedPosts(post.id)}
                  to={{
                    pathname: '/posts',
                    search: `?page=${page}&id=${post.id}`,
                  }}
                >
                  <Card {...post} onDismiss={(event: any) => handleDissmmissPost(event, post.id)} />
                </Link>
              </Space>
            </RemovePostAnimation>
          ))}
        </React.Fragment>
      ))}
      <Space m="30px">
        <Button onClick={onFetchMore}>Fetch More</Button>
      </Space>
    </Flex>
  )
}
