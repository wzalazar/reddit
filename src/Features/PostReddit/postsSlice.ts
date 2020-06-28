import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { postsFetch } from './postsFetch'

interface InitialState {
  data: any[]
  loading: string
  error: boolean
  dismissPosts: any[]
}

const initialState: InitialState = {
  data: [],
  loading: 'idle',
  error: false,
  dismissPosts: [],
}

const postSlice = createSlice({
  name: 'postsReddit',
  initialState,
  /* eslint-disable no-empty-pattern */
  reducers: {
    dismissPosts: (state, action: PayloadAction<string>) => {
      state.dismissPosts.push(action.payload)
      state.dismissPosts = Array.from(new Set(state.dismissPosts))
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

export const { dismissPosts } = postSlice.actions

export default postSlice.reducer
