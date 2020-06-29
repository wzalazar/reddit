import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postsFetch } from '../postsFetch'
import { postsPageSelector, postsAfterSelector } from '../postsSelectors'
import { dismissPosts, viewedPosts } from '../postsSlice'

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
  const onViewedPosts = (id: string) => dispatch(viewedPosts(id))

  return {
    pages,
    onFetchMore,
    onDismissPost,
    onViewedPosts,
  }
}
