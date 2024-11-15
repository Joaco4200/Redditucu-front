import React, { useState } from "react";
import { saveComment } from "../axios/axiosComment";
import { useAuth0 } from "@auth0/auth0-react";

const Comment = ()=>{

    const {user} = useAuth0();
    const [content,SetContent]= useState("");

    const handleCreateCommentButtonClick= async()=>{
        const commentData={
            user: {
                auth0id:user.sub
            },
            post: {
                postid: postid
            },
            content:content
        }
        await saveComment(commentData);
    }

    return(
        <div>
            <input
                className=""
                type= "text"
                placeholder="Add comment..."
                value={content}
                onChange={handleContentChange}
            />
            <button className="btn btn-outline-light rounded-pill" onClick={handleCreateCommentButtonClick}>
                Comment
            </button>
        </div>
    )
}