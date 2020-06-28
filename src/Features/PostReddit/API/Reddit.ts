export const RedditAPI = () => {
  const getPost = () => fetch('https://www.reddit.com/top.json?limit=50').then((data) => data.json())

  return {
    getPost,
  }
}
