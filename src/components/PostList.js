import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import { useLoaderData } from "react-router-dom";
// import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
   const postList = useLoaderData();
    
    return <>
        
        {postList.length === 0 && <WelcomeMsg />}
        {postList.map((post) => <Post key={post.id} post={post} />)}
    </>
};

export const postLoader = () => {
    return fetch('https://dummyjson.com/posts' )
        .then(res => res.json())
        .then((data) => {
            return data.posts;
        });
}

export default PostList;