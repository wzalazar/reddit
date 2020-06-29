import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { postsFetch } from '../postsFetch'
import { postsPageSelector, postsAfterSelector } from '../postsSelectors'
import { dismissPosts, viewedPosts, animatedPosts } from '../postsSlice'

export const usePostsActions = () => {
  const dispatch = useDispatch()
  const pages = useSelector(postsPageSelector)
  const after = useSelector(postsAfterSelector)

  useEffect(() => {
    if (!after) {
      dispatch(postsFetch())
    }

    return () => {}
  }, [dispatch, after])

  const onFetchMore = () => dispatch(postsFetch(after))
  const onDismissPost = (id: string) => dispatch(dismissPosts(id))
  const onViewedPosts = (id: string) => dispatch(viewedPosts(id))
  const onAnimatedPost = (id: string) => dispatch(animatedPosts(id))

  return {
    pages,
    onFetchMore,
    onDismissPost,
    onViewedPosts,
    onAnimatedPost,
  }
}
