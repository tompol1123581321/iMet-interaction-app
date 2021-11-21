import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Interaction } from "../../../../../types/models";

export type FeedState = { interactions: Interaction[] };

const initialState = { interactions: [] } as FeedState;

const interactionSlice = createSlice({
  name: "feed.interactions",
  initialState,
  reducers: {
    loadInteractions: (state, action) => {
      state.interactions = [...action.payload];
    },
  },
});

export const { loadInteractions } = interactionSlice.actions;
export default interactionSlice.reducer;
