import { createSelector } from 'reselect'

export const redditSelector = (state: any) => state?.postsReddit ?? []

const mappingPost = (post: any) => ({
  id: post?.data?.id,
  author: post?.data?.author,
  title: post?.data?.title,
  date: post?.data?.created,
  thumbAuthor: post?.data?.thumbnail,
  thumbPost: post?.data?.thumbnail,
  commentNumber: post?.data['num_comments'],
})

export const isDismiss = (pages: any, page: any, post: any) => {
  const dismissPost = pages?.dismissPosts.indexOf(post?.data?.id) !== -1
  const dismissPage = pages?.dismissAllPosts.indexOf(page?.data?.after) !== -1

  return dismissPost || dismissPage
}

export const isRead = (pages: any, post: any) => {
  return pages?.viewedPosts.indexOf(post?.data?.id) !== -1
}

export const isAnimatedPost = (pages: any, post: any) => {
  return pages?.animatedPosts.indexOf(post?.data?.id) !== -1
}

export const pageSelector = (pages: any) => {
  return pages?.data?.reduce((acum: any, page: any, pageNumber: number) => {
    const children = page?.data?.children ?? []
    const posts = children.map((post: any) => {
      const postMapped = mappingPost(post)

      return {
        ...postMapped,
        isDismiss: isDismiss(pages, page, post),
        statusRead: isRead(pages, post),
        isAnimatedPost: isAnimatedPost(pages, post),
      }
    })

    return [...acum, [pageNumber, posts]]
  }, [])
}

export const getByIDSelector = (pages: any, currentPage?: any, id?: string) => {
  const posts = pages?.data?.[currentPage]?.data?.children ?? []
  const page = pages?.data?.[currentPage]

  for (let post of posts) {
    if (post.data.id === id) {
      const postMapped = mappingPost(post)
      return {
        ...postMapped,
        isDismiss: isDismiss(pages, page, post),
        statusRead: isRead(pages, post),
        isAnimatedPost: isAnimatedPost(pages, post),
      }
    }
  }

  return {}
}

export const afterSelector = (pages: any) => {
  const [lastPage] = pages?.data?.slice(-1) ?? []
  return lastPage?.data?.after
}

export const pageDismissSelector = (pages: any) => pages?.dismissAllPosts ?? []

export const postsAfterSelector = createSelector(redditSelector, afterSelector)
export const postsPageSelector = createSelector(redditSelector, pageSelector)
export const postsPageDismissSelector = createSelector(redditSelector, pageDismissSelector)
export const postsGetByIDSelector = (currentPage?: any, id?: string) =>
  createSelector(redditSelector, (page) => getByIDSelector(page, currentPage, id))
