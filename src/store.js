import { createStore, combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";
import { loginReducer } from "./reducers/loginReducer";

const rootReducer = combineReducers({
  userLogin: loginReducer,
  userProfile: userReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

export default store;
