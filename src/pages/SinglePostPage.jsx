import { useState,useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "../components/Header";
import HomeButton from "../atoms/HomeButton";
import { useParams } from "react-router-dom";
import { getComment, saveComment } from "../axios/axiosComment";
import { getPostByPostId, getPosts } from "../axios/axiosPost";

const SinglePostPage = ()=>{
    const {user} = useAuth0()
    const {postid} = useParams()
    const [content,SetContent] = useState("");

    const handleContentChange = (e)=> SetContent(e.target.value);

    ///OBTENER POST INDIVIDUAL CON EL USE PARAMS BYPOSTID Y {DESPUES} OBTENER LOS COMMENTS DE ESE POST.
    
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

    //poner el post correspondiente por su positd aca abajo.
    return(
        <div className="">
            <Header/>
            <div className="d-flex" style={{height: '44.5vw'}}>
                <div className="col-2 d-flex flex-column align-items-center justify-content-start border border-secondary border-bottom-0"> 
                    <HomeButton/>
                </div>
                <div className="col-10 d-flex justify-content-center mt-4"> 
                    <div className="comment"> 
                        <input 
                            className=""
                            type= "text"
                            placeholder="Add comment..."
                            value={content}
                            onChange={handleContentChange}
                        />
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default SinglePostPage;