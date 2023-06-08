import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    { id: 1, name: "Hotel ", icon: "icon-bed" },
    { id: 2, name: "Hotel + Flights ", icon: "icon-destination" },
    { id: 3, name: "Holyday", icon: "icon-home" },
    { id: 4, name: "Flights", icon: "icon-tickets" },
  ],
  currentTab: "Hotel",
};

export const findPlaceSlice = createSlice({
  name: "find-place",
  initialState,
  reducers: {
    addCurrentTab: (state, { payload }) => {
      state.currentTab = payload;
    },
  },
});

export const { addCurrentTab } = findPlaceSlice.actions;
export default findPlaceSlice.reducer;
