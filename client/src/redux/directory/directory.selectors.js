import { createSelector } from 'reselect'

const selectDirectory = (state) => state.directory

export const selectMainDirectory = createSelector(
  [selectDirectory],
  (directory) => directory.mainDirectory
)
