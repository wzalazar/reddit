import { useLocation } from 'react-router-dom'

const useGetQuery = () => {
  return new URLSearchParams(useLocation().search)
}

export const useQuery = () => {
  const queryPage = useGetQuery()

  const query: { page: string; id: string; view: boolean } = {
    page: queryPage.get('page') ?? '',
    id: queryPage.get('id') ?? '',
    view: queryPage.get('view') === 'true',
  }

  return query
}
