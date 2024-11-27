import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from "axios";


const Post = ({title,content,created_at,user:userid,postId})=>{
    const {user,isAuthenticated}= useAuth0();
    const [likeButton, setLikeButton] = useState(0);
    const [dislikeButton, setDislikeButton] = useState(0);
    const [likesCount, setLikesCount] = useState(0);
    const [disLikesCount, setDisLikesCount] = useState(0);
    
    useEffect(() => {
        if (isAuthenticated) {
            getUserLikeForPost();
            getLikesCount();
        }
    }, [isAuthenticated]);

    const getUserLikeForPost = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/user/${user?.sub}/post/${postId}/like`);
            const userLike = response.data;
            setLikeButton(userLike === 1);
            setDislikeButton(userLike === -1);
        } 
        catch (error) {
            console.error("Error fetching user like:", error);
        }
    };

    const getLikesCount = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/post/${postId}/likes`);
            setLikesCount(response.data);  
            const responseDislikes = await axios.get(`http://localhost:8080/post/${postId}/dislikes`);
            setDisLikesCount(responseDislikes.data);  
        } 
        catch (error) {
            console.error("Error fetching likes count:", error);
        }
    };

 
    const toggleLikeDislike = async (rateValue) => {
        const newRateValue = (likeButton && rateValue === 1) || (dislikeButton && rateValue === -1) ? 0 : rateValue;
    
        if (isAuthenticated) {
                await axios.post('http://localhost:8080/ratepost', {
                    params: {
                        auth0id: user?.sub,
                        postId,
                        rateValue: newRateValue,  
                    }
                });
    
                if (newRateValue === 1) {
                    setLikeButton(true);  
                    setDislikeButton(false);  
                } 
                else if (newRateValue === -1) {
                    setLikeButton(false);  
                    setDislikeButton(true);  
                } 
                else {
                    setLikeButton(false);  
                    setDislikeButton(false);
                }
    
                getLikesCount();
            } 
           
        } 
        
    return(
        <div>
            <div className="border border-secondary rounded-3 p-3 mt-2" style={{ width: '30vw', backgroundColor: '#f8f9fa'}}>
                <div className="d-flex gap-3 mb-2 text-muted" style={{ fontSize: '0.85rem'}}>
                    <a>{user.name}</a>
                    <a>{created_at}</a>
                </div>
                <h5>{title}</h5>
                <p className="text-muted" style={{ fontSize: '1.0rem', lineHeight: '1.4' }}>{content}</p> 
            </div>
                <div className="d-flex flex-column flex-md-row align-items-center mt-2">
                    <div className="d-flex justify-content-center align-items-center rounded-5 me-md-4 mb-3 mb-md-0">
                        <button
                            className="btn btn-light rounded-circle me-1"
                            
                            onClick={() => toggleLikeDislike(1)}
                            style={{ zIndex: 3 }}
                        > 
                        </button>
                        <div className="fs-4">{likesCount-disLikesCount}</div>
                        <button
                            className="btn btn-light rounded-circle ms-1"
                            
                            onClick={() => toggleLikeDislike(-1)}
                            style={{ zIndex: 3 }}
                        >
                            
                        </button>
                </div>
            </div>
        </div>
    )
}

export default Post;