import { createSlice, PayloadAction } from "@reduxjs/toolkit";

 export interface ICreateGoalState {
  activeStep: number;
  selectedId: string | null;
}

const createGoalSlice = createSlice({
  name: "createGoal",
  initialState: {
    activeStep: 0,
    selectedId: null,
  } as ICreateGoalState,
  reducers: {
    setActiveStep: (state, action: PayloadAction<number>) => {
      state.activeStep = action.payload;
    }
    ,
    setSelectedId: (state, action: PayloadAction<string>) => {
      state.selectedId = action.payload;
    }
  },
});

export const { setActiveStep, setSelectedId } = createGoalSlice.actions;
export default createGoalSlice.reducer;