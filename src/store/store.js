import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const initialState = {
  taskCards: {
      data: [],
      error: [],
      loading: false,
  },
  user: {
      hasAccess: false,
      token: {}
  }
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;