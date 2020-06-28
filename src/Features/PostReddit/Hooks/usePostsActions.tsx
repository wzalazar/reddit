import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postsFetch } from '../postsFetch'
import { postsPageSelector, postsAfterSelector } from '../postsSelectors'
import { dismissPosts } from '../postsSlice'

export const usePostsActions = () => {
  const dispatch = useDispatch()
  const pages = useSelector(postsPageSelector)
  const after = useSelector(postsAfterSelector)

  useEffect(() => {
    dispatch(postsFetch())

    return () => {}
  }, [dispatch])

  const onFetchMore = () => dispatch(postsFetch(after))
  const onDismissPost = (id: string) => dispatch(dismissPosts(id))

  return {
    pages,
    onFetchMore,
    onDismissPost,
  }
}
