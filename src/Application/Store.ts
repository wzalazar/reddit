import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import postsReducer from 'Features/PostReddit/postsSlice'

export const store = configureStore({
  reducer: {
    postsReddit: postsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
