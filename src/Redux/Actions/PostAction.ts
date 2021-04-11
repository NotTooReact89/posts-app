import * as actionTypes from "./ActionTypes";

export function getPostsFetched(data: any) {
  return {
    type: actionTypes.GET_POSTS_FETCHED,
    data,
  };
}

export function getPostsFetching() {
  return {
    type: actionTypes.GET_POSTS_FETCHING,
    data: null,
  };
}
