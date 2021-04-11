import { IPostsReduxState, initialState } from "../Reducers/PostsRedux";
import { useSelector } from "react-redux";

export function getPosts(state: { Posts: any }): IPostsReduxState {
  return state.Posts || initialState;
}

export function usePostsSelector() {
  return useSelector(getPosts);
}

export const getPostsById = (id: number) => (state: { Posts: any }) => {
  const postDetails = state.Posts?.data?.find((post: any) => post.id === id);
  return postDetails;
};

export function usePostsByIdSelector(id: number) {
  return useSelector(getPostsById(id));
}
