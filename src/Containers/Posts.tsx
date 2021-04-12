import { useState } from "react";
import { Redirect } from "react-router-dom";
import Loading from "../Components/Loading";
import PostItem from "../Components/PostItem/PostItem";
import { usePostsSelector } from "../Redux/Hooks/Posts";
import getInitials from "../Utils/GetInitials";

export const Posts = () => {
  const posts = usePostsSelector();
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div id="posts">
      {selectedPost && <Redirect to={`/postDetails/${selectedPost}`} />}
      {!posts.data && <Loading />}
      {posts.data?.map((post: any) => {
        const initials = getInitials(post.userDetails.name);
        return (
          <PostItem
            title={post.title}
            body={post.body}
            comments={post.comments}
            initials={initials}
            name={post.userDetails.name}
            onClick={() => {
              setSelectedPost(post.id);
            }}
          />
        );
      })}
    </div>
  );
};

export default Posts;
