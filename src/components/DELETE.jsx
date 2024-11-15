// import React, { useEffect, useState } from "react";
// import ProfilePage from "../pages/ProfilePage";
// import { useAuth0 } from "@auth0/auth0-react";
// import { getPosts } from "../axios/axiosPost";
// import Post from "./Post";
// import { useNavigate } from "react-router-dom";

// const PostsList = () =>{

//     const {user} = useAuth0();
//     const [posts,setPosts] = useState([]);
//     const navigate= useNavigate();

//     const handleClick= () =>{
//         navigate('/single-post-page')
//     }

//     useEffect(()=>{
//         const getPostData = async()=> {
//             const postData= await getPosts();
//             setPosts(postData); 
//         }
//         getPostData();
//     }, []);

//     return(
//         <div className="">
//             {
//                 posts.map(post =>{
//                     const  {title, content, created_at, postId, user} = post

//                     return(
//                         <div>
//                             <Post title={title} content={content} created_at={created_at} postId={postId} user={user}/> 
//                             <button className="btn" onClick={handleClick}>Add comment...</button>      
//                         </div>         
//                     )
                    
//                 }
//                 )
//             }
//         </div>
//     )
// }

// export default PostsList;