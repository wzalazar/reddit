import { createSlice } from '@reduxjs/toolkit'

import { postsFetch } from 'Features/PostReddit/postsFetch'

interface InitialState {
  loading: string
}

const initialState: InitialState = {
  loading: 'idle',
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: {
    [postsFetch.pending]: (state) => {
      state.loading = 'loading'
    },
    [postsFetch.fulfilled]: (state) => {
      state.loading = 'complete'
    },
    [postsFetch.rejected]: (state) => {
      state.loading = 'complete'
    },
  },
})

export default appSlice.reducer
