import React from 'react'

import { Button } from 'Components/Button'

import { usePostDismissAll } from './Hooks/usePostDismissAll'

export const FeaturePostDismissAll = () => {
  const { onDismissAllPost, onAnimatedPostsPage } = usePostDismissAll()

  const handlerOnClick = () => {
    onDismissAllPost()
    setTimeout(() => onAnimatedPostsPage(), 350 * 1)
  }

  return <Button onClick={handlerOnClick}>Dismiss All</Button>
}
