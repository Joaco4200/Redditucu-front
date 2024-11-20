import React, { useState } from "react";
import { saveComment } from "../axios/axiosComment";
import { useAuth0 } from "@auth0/auth0-react";

const CreateComment = ({postId, onNewComment})=>{

    const {user} = useAuth0();
    const [content,SetContent]= useState("");

    const handleContentChange = (e) => SetContent(e.target.value);

    const handleCreateCommentButtonClick= async()=>{
        const commentData={
            user: {
                auth0id:user.sub
            },
            post: {
                postId: postId
            },
            content:content
        }
        const newComment = await saveComment(commentData);
        onNewComment(newComment);
        SetContent("");
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
            <button className="btn   btn-sm" onClick={handleCreateCommentButtonClick}>
                Comment
            </button>
        </div>
    )
}

export default CreateComment;