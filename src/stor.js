// this use when i have a lot of reducer
import { combineReducers, createStore } from "redux";
import accountReducer from "./features/Accounts/accountSlice";

const rootReducer = combineReducers({
  account: accountReducer,
});

const store = createStore(rootReducer);

export default store;
