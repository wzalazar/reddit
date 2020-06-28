import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Card } from 'Components/Card'

import { postsFetch } from './postsFetch'
import { postsSelector } from './postsSelector'

export const Post = () => {
  const dispatch = useDispatch()
  const posts = useSelector(postsSelector)

  useEffect(() => {
    dispatch(postsFetch())

    return () => {}
  }, [])

  return (
    <>
      {posts.map((post: any) => (
        <Card key={post.id} {...post} />
      ))}
    </>
  )
}
