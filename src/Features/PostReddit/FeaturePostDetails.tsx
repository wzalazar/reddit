import React from 'react'

import { Post } from 'Components/Post'

import { useRedditActions } from './Hooks/useRedditActions'

export const FeaturePostDetails = () => {
  const { post } = useRedditActions()

  return <>{post && <Post {...post} />}</>
}
