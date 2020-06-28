import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { postsFetch } from './postsFetch'

interface InitialState {
  data: any[]
  loading: string
  error: boolean
}

const initialState: InitialState = {
  data: [],
  loading: 'idle',
  error: false,
}

const postSlice = createSlice({
  name: 'postsReddit',
  initialState,
  /* eslint-disable no-empty-pattern */
  reducers: {},
  extraReducers: {
    [postsFetch.pending]: () => {},
    [postsFetch.fulfilled]: (state, action: PayloadAction<any>) => {
      state.data.push(action.payload)
    },
    [postsFetch.rejected]: () => {},
  },
})

export const {} = postSlice.actions

export default postSlice.reducer
