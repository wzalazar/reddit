import { useDispatch } from 'react-redux'
import { dismissAllPosts } from '../postsSlice'

export const usePostDismissAll = () => {
  const dispath = useDispatch()
  const onDismissAllPost = () => dispath(dismissAllPosts())

  return { onDismissAllPost }
}
