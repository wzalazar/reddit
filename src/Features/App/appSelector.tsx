import { createSelector } from 'reselect'

const appSelector = (state: any) => state?.app ?? []

export const appLoadingSelector = createSelector(appSelector, (app) => {
  return app.loading
})
