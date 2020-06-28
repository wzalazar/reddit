import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { postsFetch } from '../postsFetch'
import { postsPageSelector, postsAfterSelector, postsGetByIDSelector } from '../postsSelectors'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export const useRedditActions = () => {
  const dispatch = useDispatch()
  const pages = useSelector(postsPageSelector)
  const after = useSelector(postsAfterSelector)

  const queryPage = useQuery()

  const query: { page: string; id: string } = {
    page: queryPage.get('page') ?? '',
    id: queryPage.get('id') ?? '',
  }

  const post: any = useSelector(postsGetByIDSelector(query.page, query.id))

  useEffect(() => {
    dispatch(postsFetch())

    return () => {}
  }, [dispatch])

  const onFetchMore = () => dispatch(postsFetch(after))

  return {
    pages,
    post,
    onFetchMore,
    query,
  }
}
