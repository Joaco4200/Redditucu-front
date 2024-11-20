import React, { useState,useEffect } from "react";
import Header from "../components/Header";
import { useAuth0 } from "@auth0/auth0-react";
import HomeButton from "../atoms/HomeButton";
import { getUserPosts } from "../axios/axiosPost";
import Post from "../components/Post";

const ProfilePage = () =>{
    const {user,isAuthenticated}= useAuth0();
    const [posts,setPosts]= useState([]);
    const auth0id = user.sub;

    useEffect(()=>{
        const getAllUserPosts =async()=>{
            const postData=await getUserPosts(auth0id)
            setPosts(postData)
        }
        getAllUserPosts();
    },[])

    if (isAuthenticated) {
        return (
            <div>
                <Header/>
                
                <div className="d-flex" style={{ height: '44.5vw' }}>
           
                    <div className="col-2 d-flex flex-column align-items-center justify-content-start border border-secondary border-bottom-0 "> 
                        <a className="mt-5">
                            <HomeButton/>
                        </a>
                    </div>  
                    <div className="col-6 d-flex flex-column align-items-center justify-content-start p-4" style={{marginTop:'9rem' }}>
                        <img src={user.picture} className="mb-5" alt="User" style={{ width: '150px', borderRadius: '50%' }}/>
                        <h2 className="mb-3 border border-secondary rounded p-2">Username: {user.name}</h2>
                        <h2 className="border border-secondary rounded p-2">Email: {user.email}</h2>   
                    </div>
                    <div className="col-4">
                        <div className="mt-5 mb-4">
                            <h1 className="fs-3 text-start">Lasts posts:</h1>
                        </div>
                            {
                                posts.map(post=>{
                                    const {title, content, created_at, postId, user} = post

                                    return(
                                        <Post
                                            title={title} content={content} created_at={created_at} postId={postId} user={user}
                                        />
                                    )
                                })
                            }
                        </div>   
                </div>   
            </div>
        );
    } 
    return (
        <div>
                <Header/>
                <div className=" justify-content-center mt-3">
                    <p> You must be authenticated to view your personal information.</p>
                </div>
        </div>
    )
}

export default ProfilePage;
