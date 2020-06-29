import React from 'react'

import { Button } from 'Components/Button'

import { usePostDismissAll } from './Hooks/usePostDismissAll'

export const FeaturePostDismissAll = () => {
  const { onDismissAllPost } = usePostDismissAll()

  return <Button onClick={onDismissAllPost}>Dismiss All</Button>
}
