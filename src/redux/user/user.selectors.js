import { createSelector } from 'reselect'

const selectUser = (state) => state.user

//return 'currentUser' from state.user
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
)
