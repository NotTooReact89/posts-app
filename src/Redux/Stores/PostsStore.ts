import { ReducerState } from "react";
import { createStore, applyMiddleware, compose, Reducer, Store } from "redux";
import thunk from "redux-thunk";
// @ts-ignore
import multi from "redux-multi";

import rootReducer from "../Reducers";

export function configureStore<R extends Reducer>(
  rootReducer: R
): Store<ReducerState<R>> {
  const composeEnhancers =
    (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, multi))
  );

  return store;
}

export function createPostsStore() {
  return configureStore(rootReducer);
}

const store = createPostsStore();

if (process.env.NODE_ENV === "development") {
  window.__POSTS_STORE__ = createPostsStore();
}

export default store;
