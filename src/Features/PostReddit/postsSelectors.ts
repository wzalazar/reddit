import { createSelector } from 'reselect'

const redditSelector = (state: any) => state?.postsReddit?.data ?? []

export const postsPageSelector = createSelector(redditSelector, (pages) => {
  return pages.reduce((acum: any, page: any, pageNumber: number) => {
    const children = page?.data?.children ?? []

    const posts = children.map((post: any) => ({
      id: post.data.id,
      author: post.data.author,
      title: post.data.title,
      date: post.data.created,
      thumbAuthor: post.data.thumbnail,
      thumbPost: post.data.thumbnail,
      commentNumber: post.data['num_comments'],
    }))

    return [...acum, [pageNumber, posts]]
  }, [])
})

export const postsAfterSelector = createSelector(redditSelector, (pages) => {
  const [lastPage] = pages.slice(-1) ?? []
  return lastPage?.data?.after
})
