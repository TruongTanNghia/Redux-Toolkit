//* Lib
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
//* Import
import ContactReducer from "./Todoslice";

const middleware = [thunk];

middleware.push(logger);

//* quản lý reducer
const reducer = combineReducers({
  storeContacts: ContactReducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware().concat(logger),
});
export default store;
