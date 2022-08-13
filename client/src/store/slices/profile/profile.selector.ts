import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@store/index'

const profileState = (state: RootState) => state.profile

const profileSelector = createSelector([profileState], (state) => state)

export default profileSelector
