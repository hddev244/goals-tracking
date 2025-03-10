import { IGoal } from "@/types/goal.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IGoalState {
  goals: IGoal[];
  selectedGroup: IGoal | null;
}

const initialState: IGoalState = {
  goals: [],
  selectedGroup: null,
};

const goalslice = createSlice({
  name: "group",
  initialState,
  reducers: {
    setGoals: (state, action: PayloadAction<IGoal[]>) => {
      state.goals = action.payload;
    },
    setSelectedGroup: (state, action: PayloadAction<IGoal>) => {
      state.selectedGroup = action.payload;
    },
  },
});


export const { setGoals, setSelectedGroup } = goalslice.actions;
export default goalslice.reducer;
