import { configureStore } from "@reduxjs/toolkit";
import groupSlice from './slices/groupSlice';
import goalslice from './slices/goalSlice';
export const store = configureStore({
  reducer: {
    group : groupSlice,
    goal : goalslice,

  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;