import { RedditAPI } from './Reddit'

describe('Reddit', () => {
  describe('when call the api with after', () => {
    it('should return the url', async () => {
      global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ json: () => Promise.resolve() }))

      const redditAPI = RedditAPI()
      await redditAPI.getPost('1')

      expect(global.fetch).toBeCalledWith('https://www.reddit.com/top.json?limit=50&after=1')
    })
  })
})
