import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { postsFetch } from './postsFetch'

interface InitialState {
  data: any[]
  loading: string
  error: boolean
  dismissPosts: any[]
  dismissAllPosts: any[]
  viewedPosts: any[]
}

const initialState: InitialState = {
  data: [],
  loading: 'idle',
  error: false,
  dismissPosts: [],
  dismissAllPosts: [],
  viewedPosts: [],
}

const postSlice = createSlice({
  name: 'postsReddit',
  initialState,
  reducers: {
    dismissPosts: (state, action: PayloadAction<string>) => {
      state.dismissPosts.push(action.payload)
      state.dismissPosts = Array.from(new Set(state.dismissPosts))
    },
    dismissAllPosts: (state) => {
      const pagesAfters = state?.data?.map((page) => page.data.after)
      state.dismissAllPosts = pagesAfters
    },
    viewedPosts: (state, action: PayloadAction<string>) => {
      state.viewedPosts.push(action.payload)
      state.viewedPosts = Array.from(new Set(state.viewedPosts))
    },
  },
  extraReducers: {
    [postsFetch.pending]: (state) => {
      state.loading = 'loading'
    },
    [postsFetch.fulfilled]: (state, action: PayloadAction<any>) => {
      state.data.push(action.payload)
      state.loading = 'complete'
    },
    [postsFetch.rejected]: () => {},
  },
})

export const { dismissPosts, dismissAllPosts, viewedPosts } = postSlice.actions

export default postSlice.reducer
