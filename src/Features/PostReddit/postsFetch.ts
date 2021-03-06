import { createAsyncThunk } from '@reduxjs/toolkit'
import { RedditAPI } from './API/Reddit'

const redditAPI = RedditAPI()

export const postsFetch: any = createAsyncThunk('postsReddit/fetch', (after: string) => redditAPI.getPost(after))
