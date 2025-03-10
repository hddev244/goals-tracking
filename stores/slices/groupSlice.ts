import GroupService from "@/services/group-service";
import { IGroup } from "@/types/group.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IGroupState {
  groups: IGroup[];
  selectedGroup: IGroup | null;
}

const initialState: IGroupState = {
  groups: [],
  selectedGroup: null,
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    setGroups: (state, action: PayloadAction<IGroup[]>) => {
      state.groups = action.payload;
    },
    setSelectedGroup: (state, action: PayloadAction<IGroup>) => {
      state.selectedGroup = action.payload;
    },
  },
});


export const { setGroups, setSelectedGroup } = groupSlice.actions;
export default groupSlice.reducer;
