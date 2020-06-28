import { createSelector } from 'reselect'

const redditSelector = (state: any) => state?.postsReddit ?? []

const mappingPost = (post: any) => ({
  id: post?.data?.id,
  author: post?.data?.author,
  title: post?.data?.title,
  date: post?.data?.created,
  thumbAuthor: post?.data?.thumbnail,
  thumbPost: post?.data?.thumbnail,
  commentNumber: post?.data['num_comments'],
})

export const postsPageSelector = createSelector(redditSelector, (pages) => {
  return pages.data.reduce((acum: any, page: any, pageNumber: number) => {
    const children = page?.data?.children ?? []
    const posts = children.map((post: any) => {
      const postMapped = mappingPost(post)

      return { ...postMapped, isDismiss: pages.dismissPosts.indexOf(post.data.id) !== -1 }
    })

    return [...acum, [pageNumber, posts]]
  }, [])
})

export const postsAfterSelector = createSelector(redditSelector, (pages) => {
  const [lastPage] = pages?.data?.slice(-1) ?? []
  return lastPage?.data?.after
})

export const postsGetByIDSelector = (page?: any, id?: string) =>
  createSelector(redditSelector, (pages) => {
    const posts = pages?.data[page]?.data?.children ?? []

    for (let post of posts) {
      if (post.data.id === id) {
        const postMapped = mappingPost(post)

        return { ...postMapped, isDismiss: pages.dismissPosts.indexOf(post.data.id) !== -1 }
      }
    }

    return {}
  })
