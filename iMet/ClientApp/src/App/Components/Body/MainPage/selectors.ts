import { createSelector } from "reselect";
import { RootStateType } from "../../../store/rootReducer";
import { store } from "../../../store/store";
const selectState = (state: RootStateType) => state;
export const getInteractions = createSelector(
  selectState,
  (state) => state.feed.interactions
);
