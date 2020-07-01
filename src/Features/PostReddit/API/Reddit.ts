export const URLReddit = 'https://www.reddit.com'

export const RedditAPI = () => {
  const getPost = (after?: string): Promise<any> => {
    const url = new URL(`${URLReddit}/top.json`)
    url.searchParams.set('limit', '50')
    after && url.searchParams.set('after', after)

    return fetch(url.href).then((data) => data.json())
  }

  return {
    getPost,
  }
}
