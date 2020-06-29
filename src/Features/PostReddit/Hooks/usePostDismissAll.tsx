import { useDispatch } from 'react-redux'
import { dismissAllPosts, animatedPostsPage } from '../postsSlice'

export const usePostDismissAll = () => {
  const dispatch = useDispatch()

  const onDismissAllPost = () => dispatch(dismissAllPosts())
  const onAnimatedPostsPage = () => dispatch(animatedPostsPage())

  return { onDismissAllPost, onAnimatedPostsPage }
}
