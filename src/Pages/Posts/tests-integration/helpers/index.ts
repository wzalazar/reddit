import casual from 'casual'

casual.define('post', () => ({
  id: casual.integer(0, 1000),
  title: casual.title,
  thumbnail: 'https://picsum.photos/200/300',
  created: casual.unix_time,
  num_comments: casual.integer(0, 1000),
  author: casual.name,
}))

export const createReply = (posts: any[]) => ({
  kind: 'Listing',
  data: {
    children: posts.map((post: any) => ({ data: post })),
    after: 't3_hilmwr',
  },
})

export const data = casual
