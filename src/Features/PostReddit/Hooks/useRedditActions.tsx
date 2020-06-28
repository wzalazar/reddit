import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postsFetch } from '../postsFetch'
import { postsPageSelector, postsAfterSelector } from '../postsSelectors'

export const useRedditActions = () => {
  const dispatch = useDispatch()
  const pages = useSelector(postsPageSelector)
  const after = useSelector(postsAfterSelector)

  useEffect(() => {
    dispatch(postsFetch())

    return () => {}
  }, [dispatch])

  const onFetchMore = () => dispatch(postsFetch(after))

  return {
    pages,
    onFetchMore,
  }
}
