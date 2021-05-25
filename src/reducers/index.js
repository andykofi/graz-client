import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import accountReducer from "./accountReducer";
import securityReducer from "./securityReducer";

export default combineReducers({
  errors: errorReducer,
  account: accountReducer,
  security: securityReducer
});