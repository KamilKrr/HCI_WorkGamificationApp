import { createSlice } from '@reduxjs/toolkit'

export const trophySlice = createSlice({
  name: 'trophy',
  initialState: {
    value: 0,
  },
  reducers: {
    addTrophy: (state) => {
      state.value += 1
    },
    removeTrophy: (state) => {
      state.value -= 1
    }
  },
})

export const { addTrophy, removeTrophy} = trophySlice.actions

export default trophySlice.reducer