import React, { useEffect, useState } from "react";
import ProfilePage from "../pages/ProfilePage";
import { useAuth0 } from "@auth0/auth0-react";
import { getPosts } from "../axios/axiosPost";
import Post from "./Post";

const PostsList = () =>{

    const {user} = useAuth0();
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        const getPostData = async()=> {
            const postData= await getPosts();
            setPosts(postData); 
        }
        getPostData();
    }, []);

    return(
        <div>
            {
                posts.map(post =>{
                    const  {title, content, created_at, postId, user} = post

                    return(
                        <Post title={title} content={content} created_at={created_at} postId={postId} user={user}/>
                    )
                }
                )
            }
        </div>
    )
}

export default PostsList;