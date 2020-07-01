import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import postsReducer from 'Features/PostReddit/postsSlice'
import { LocalStorage } from './LocalStorage'

const localStorage = LocalStorage()

const preloadedState = localStorage.loadState()

export const store = configureStore({
  preloadedState,
  reducer: {
    postsReddit: postsReducer,
  },
})

store.subscribe(() => {
  localStorage.saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
