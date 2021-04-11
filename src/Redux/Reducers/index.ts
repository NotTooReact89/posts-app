import { combineReducers } from "redux";
import Posts, { IPostsReduxState } from "./PostsRedux";

export interface IAppState {
  Posts: IPostsReduxState;
}

export default combineReducers<IAppState>({
  Posts,
});
