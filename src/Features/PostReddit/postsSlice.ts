import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { postsFetch } from './postsFetch'

interface InitialState {
  data: any[]
  loading: string
  error: boolean
  dismissPosts: any[]
  dismissAllPosts: any[]
}

const initialState: InitialState = {
  data: [],
  loading: 'idle',
  error: false,
  dismissPosts: [],
  dismissAllPosts: [],
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
  },
  extraReducers: {
    [postsFetch.pending]: () => {},
    [postsFetch.fulfilled]: (state, action: PayloadAction<any>) => {
      state.data.push(action.payload)
    },
    [postsFetch.rejected]: () => {},
  },
})

export const { dismissPosts, dismissAllPosts } = postSlice.actions

export default postSlice.reducer
