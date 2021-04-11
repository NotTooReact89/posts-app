import * as actionTypes from "../Actions/ActionTypes";

export interface IPostsReduxState {
  data?: any;
  error?: unknown;
}

export const initialState: IPostsReduxState = {
  data: null,
};

export interface IPostsReduxAction {
  data: any;
  type: string;
}
const reducer = (
  state = initialState,
  action: IPostsReduxAction
): IPostsReduxState => {
  if (isGetPostsFetchingAction(action)) {
    return {
      data: null,
    };
  }
  if (isGetPostsAction(action)) {
    return {
      data: action.data,
    };
  }
  return state;
};

export default reducer;

export function isGetPostsAction(action: {
  type: string;
}): action is {
  type: typeof actionTypes.GET_POSTS_FETCHED;
  data: any;
} {
  return action.type === actionTypes.GET_POSTS_FETCHED;
}

export function isGetPostsFetchingAction(action: {
  type: string;
}): action is {
  type: typeof actionTypes.GET_POSTS_FETCHING;
} {
  return action.type === actionTypes.GET_POSTS_FETCHING;
}
