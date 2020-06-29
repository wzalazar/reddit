import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import postsReducer from 'Features/PostReddit/postsSlice'
import appReducer from 'Features/App/appSlice'

export const store = configureStore({
  reducer: {
    postsReddit: postsReducer,
    app: appReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
