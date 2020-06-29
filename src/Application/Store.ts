import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import postsReducer from 'Features/PostReddit/postsSlice'
import appReducer from 'Features/App/appSlice'
import { LocalStorage } from './LocalStorage'

const localStorage = LocalStorage()

const preloadedState = localStorage.loadState()

export const store = configureStore({
  preloadedState,
  reducer: {
    postsReddit: postsReducer,
    app: appReducer,
  },
})

store.subscribe(() => {
  localStorage.saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
