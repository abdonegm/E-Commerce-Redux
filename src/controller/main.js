import { cartReducer } from "./reducer";
import { combineReducers } from "redux";

export const root = combineReducers({
  cartReducer,
});
