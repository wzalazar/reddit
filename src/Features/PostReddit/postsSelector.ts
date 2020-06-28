import { createSelector } from 'reselect'

const postsItemSelector = (state: any) => state?.postsReddit?.data?.data?.children ?? []

export const postsSelector = createSelector(postsItemSelector, (items) => {
  return items.reduce((acum: any, value: any) => {
    const post = {
      id: value.data.id,
      author: value.data.author,
      title: value.data.title,
      date: value.data.created,
      thumbAuthor: value.data.thumbnail,
      thumbPost: value.data.thumbnail,
      commentNumber: value.data['num_comments'],
    }

    return [...acum, post]
  }, [])
})
