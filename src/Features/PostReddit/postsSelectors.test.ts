import casual from 'casual'
import { redditSelector, pageSelector, afterSelector, getByIDSelector, pageDismissSelector } from './postsSelectors'
import { initialState } from './postsSlice'

describe('selectors', () => {
  describe('redditSelector', () => {
    it('should return empty array', () => {
      const actual = redditSelector({})

      expect(actual).toEqual(expect.arrayContaining([]))
    })
  })

  describe('pageSelector', () => {
    it('should return empty array', () => {
      const actual = pageSelector({})

      expect(actual).toEqual(expect.arrayContaining([]))
    })

    it('should return empty array', () => {
      const pages = {
        data: [{}],
      }

      const actual = pageSelector(pages)

      expect(actual).toEqual(expect.arrayContaining([]))
    })
  })

  describe('afterSelector', () => {
    it('should return empty array', () => {
      const actual = afterSelector({})

      expect(actual).toEqual(expect.arrayContaining([]))
    })
  })

  describe('getByIDSelector', () => {
    it('should return empty object', () => {
      const actual = getByIDSelector({})

      expect(actual).toMatchObject({})
    })
  })

  describe('getByIDSelector', () => {
    describe('when matching the id', () => {
      it('should return the post mapped', () => {
        // data from server
        const post = {
          id: casual.integer(0, 1000),
          title: casual.title,
          thumbnail: 'https://picsum.photos/200/300',
          created: casual.unix_time,
          num_comments: casual.integer(0, 1000),
          author: casual.name,
        }
        const pages = {
          ...initialState,
          data: [
            {
              data: {
                children: [
                  {
                    data: post,
                  },
                ],
              },
            },
          ],
        }
        const actual = getByIDSelector(pages, 0, post.id)

        const expected = {
          id: post.id,
          author: post.author,
          title: post.title,
          date: post.created,
          thumbAuthor: post.thumbnail,
          thumbPost: post.thumbnail,
          commentNumber: post.num_comments,
          isDismiss: false,
          statusRead: false,
          isAnimatedPost: false,
        }

        expect(actual).toStrictEqual(expected)
      })
    })

    describe('when not matching the id', () => {
      it('should return the post mapped', () => {
        // data from server
        const post = {
          id: casual.integer(0, 1000),
          title: casual.title,
          thumbnail: 'https://picsum.photos/200/300',
          created: casual.unix_time,
          num_comments: casual.integer(0, 1000),
          author: casual.name,
        }
        const pages = {
          ...initialState,
          data: [
            {
              data: {
                children: [
                  {
                    data: post,
                  },
                ],
              },
            },
          ],
        }
        const actual = getByIDSelector(pages, 0, post.id + 1)

        expect(actual).toStrictEqual({})
      })
    })
  })

  describe('pageDismissSelector', () => {
    const actual = pageDismissSelector({})

    expect(actual).toEqual(expect.arrayContaining([]))
  })
})
