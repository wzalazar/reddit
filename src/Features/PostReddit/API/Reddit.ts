export const RedditAPI = () => {
  const getPost = (after?: string): Promise<any> => {
    const url = new URL('https://www.reddit.com/top.json')
    url.searchParams.set('limit', '10')
    after && url.searchParams.set('after', after)

    return fetch(url.href).then((data) => data.json())
  }

  return {
    getPost,
  }
}
