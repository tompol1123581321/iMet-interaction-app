import { combineReducers } from "redux";
import userReducer, { UserState } from "./userSlice";
import interactionReducer, {
  FeedState,
} from "../Components/Body/MainPage/reducers/interactionSlice";

export const rootReducer = combineReducers({
  user: userReducer,
  feed: interactionReducer,
});

export type RootStateType = {
  feed: FeedState;
  user: UserState;
};
