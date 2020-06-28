import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Card } from 'Components/Card'
import { Space } from 'Components/Space'

import { postsFetch } from './postsFetch'
import { postsSelector } from './postsSelector'

export const Post = () => {
  const dispatch = useDispatch()
  const posts = useSelector(postsSelector)

  useEffect(() => {
    dispatch(postsFetch())

    return () => {}
  }, [dispatch])

  return (
    <>
      {posts.map((post: any) => (
        <Space key={post.id} m="10px">
          <Card {...post} />
        </Space>
      ))}
    </>
  )
}
