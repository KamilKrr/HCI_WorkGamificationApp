import { configureStore } from '@reduxjs/toolkit'
import trophyReducer from "./trophySlice";
import xpReducer from "./experiencePointsSlice";

export default configureStore({
    reducer: {
        trophy: trophyReducer,
        xp: xpReducer
    },
})