import axios, { AxiosRequestConfig } from "axios";
import { getPostsFetching } from "./Redux/Actions/PostAction";
import { createPostsStore } from "./Redux/Stores/PostsStore";

export const postsUrl = process.env.REACT_APP_BASE_URL + "/posts";
export const commentsUrl = process.env.REACT_APP_BASE_URL + "/comments";
export const userUrl = process.env.REACT_APP_BASE_URL + "/user";

export const config: AxiosRequestConfig = {
  headers: {
    "x-api-key": process.env.REACT_APP_X_API_KEY,
    "Content-Type": "application/json",
  },
};

export const getPosts = () => axios.get(postsUrl, config);

export const getPostComments = (id?: string) =>
  axios.get(commentsUrl, {
    ...config,
    params: {
      id: id,
    },
  });

export const getUserDetails = (id?: string) =>
  axios.get(userUrl, {
    ...config,
    params: {
      id: id,
    },
  });

export async function getDetailsPosts() {
  const store = createPostsStore();

  store.dispatch(getPostsFetching());

  const [posts, postComments, users] = await Promise.all([
    getPosts(),
    getPostComments(),
    getUserDetails(),
  ]);

  const detailedPosts = posts.data.map((post: any) => ({
    ...post,
    userDetails: users.data.find((user: any) => user.id === post.userId),
    comments: postComments.data.filter(
      (comment: any) => comment.postId === post.id
    ),
  }));

  return detailedPosts;
}
