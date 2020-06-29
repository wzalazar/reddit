import React from 'react'
import { Link } from 'react-router-dom'

import { Card } from 'Components/Card'
import { CardLoading } from 'Components/Card/Loading'

import { Space } from 'Components/Space'
import { Button } from 'Components/Button'
import { Flex } from 'Components/Flex'

import { RemovePostAnimation } from 'Components/Animations'

import { usePostsActions } from './Hooks/usePostsActions'

const times = Array(50).fill(1)

const EmptyLoading = () => (
  <Flex wrap="wrap" justify="center">
    <Space m="0px 10px 10px 10px" width="100%">
      <CardLoading />
    </Space>
  </Flex>
)

export const FeaturePosts = () => {
  const { pages, onFetchMore, onDismissPost, onViewedPosts, onAnimatedPost } = usePostsActions()

  const handleDissmmissPost = (event: any, id: string): void => {
    event.preventDefault()
    onDismissPost(id)

    setTimeout(() => onAnimatedPost(id), 350 * 1)
  }

  if (pages.length === 0) {
    return (
      <>
        {times.map((_, key) => (
          <EmptyLoading key={key} />
        ))}
      </>
    )
  }

  return (
    <Space pt="10px">
      <Flex wrap="wrap" justify="center">
        {pages.map(([page, posts = []]: any) => (
          <React.Fragment key={page}>
            {posts.map((post: any) => {
              if (post.isAnimatedPost && post.isDismiss) return null

              return (
                <RemovePostAnimation key={`${page}-${post.id}`} isDismissing={post.isDismiss}>
                  <Space m="0px 10px 10px 10px">
                    <Link
                      onClick={() => onViewedPosts(post.id)}
                      to={{
                        pathname: '/posts',
                        search: `?page=${page}&id=${post.id}&view=true`,
                      }}
                    >
                      <Card {...post} onDismiss={(event: any) => handleDissmmissPost(event, post.id)} />
                    </Link>
                  </Space>
                </RemovePostAnimation>
              )
            })}
          </React.Fragment>
        ))}
        <Space m="30px">
          <Button onClick={onFetchMore}>Fetch More</Button>
        </Space>
      </Flex>
    </Space>
  )
}
