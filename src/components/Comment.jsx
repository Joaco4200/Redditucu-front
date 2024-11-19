import React from "react";

const Comment =({postId, content,user, created_at})=>{

    return(
        <div className="border border-secondary rounded-3 p-2" style={{ width: '30vw', backgroundColor: '#f8f9fa', lineHeight: '1.3',}}>
            <div className="d-flex gap-3 mb-1">
                <h5 style={{ fontSize: '0.8rem', }}>{user.name}</h5>
                <a style={{ fontSize: '0.8rem', }}>{created_at}</a>
            </div>
            <div>
                <p className="text-muted" style={{ marginBottom: '0.5rem', fontSize: '0.9rem'}}>{content}</p>
            </div>
        </div>
    )
}

export default Comment;