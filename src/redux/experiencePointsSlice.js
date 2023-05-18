import { createSlice } from '@reduxjs/toolkit'

export const experiencePointsSlice = createSlice({
  name: 'xp',
  initialState: {
    value: {},
  },
  reducers: {
    addXP: (state, action) => {
      const { courseID, points } = action.payload;
      state.value[courseID] = (state.value[courseID] || 0) + points;
    },
    removeXP: (state, action) => {
      const { courseID, points } = action.payload;
      state.value[courseID] = (state.value[courseID] || 0) - points;
    }
  },
})

export const { addXP, removeXP} = experiencePointsSlice.actions

export default experiencePointsSlice.reducer