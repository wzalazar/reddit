import { useSelector } from 'react-redux'

import { postsGetByIDSelector } from '../postsSelectors'

import { useQuery } from './useQuery'

export const usePostDetails = () => {
  const query = useQuery()
  const { page, id } = query

  const post: any = useSelector(postsGetByIDSelector(page, id))

  return {
    post,
  }
}
