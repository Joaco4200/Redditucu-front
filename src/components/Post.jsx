import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Post = ({title,content,created_at,user:userid})=>{
    const {user}= useAuth0();
    
    
    return(
        <div>
            <div className="border border-secondary rounded-3 p-3 mt-2" style={{ width: '30vw', backgroundColor: '#f8f9fa'}}>
                <div className="d-flex gap-3 mb-2 text-muted" style={{ fontSize: '0.85rem'}}>
                    <a>{user.name}</a>
                    <a>{created_at}</a>
                </div>
                <h5>{title}</h5>
                <p className="text-muted" style={{ fontSize: '1.0rem', lineHeight: '1.4' }}>{content}</p> 
                {/* falta la imagen */}
            </div>
        </div>
    )
}

export default Post;