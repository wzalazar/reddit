import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { postsGetByIDSelector } from '../postsSelectors'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

export const usePostDetails = () => {
  const queryPage = useQuery()

  const query: { page: string; id: string } = {
    page: queryPage.get('page') ?? '',
    id: queryPage.get('id') ?? '',
  }

  const post: any = useSelector(postsGetByIDSelector(query.page, query.id))

  return {
    post,
  }
}
